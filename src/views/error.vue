<template>
  <div>
    <el-space>
      <span> 用户Id </span>
      <el-input v-model="dataInfo.name" placeholder="请输入用户信息"></el-input>
      <el-date-picker
        v-model="dataInfo.date"
        type="daterange"
        range-separator="To"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
      />
      <el-button type="primary" @click="getList">查询</el-button>
      <el-button type="danger" v-if="selectLen.length" @click="deleteMany">批量删除</el-button>
    </el-space>
  </div>
  <el-table
    :data="dataInfo.list"
    style="width: 100%"
    v-loading="loading"
    empty-text="暂无报错信息"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column type="index" width="60" label="序号"></el-table-column>
    <el-table-column label="报错信息" width="400">
      <template #default="scope">
        <div class="overflow-container">
          {{ scope.row.message }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="pageUrl" label="报错页面"> </el-table-column>
    <el-table-column label="报错时间" width="150">
      <template #default="scope">
        <span>{{ format(parseInt(scope.row.time || scope.row.date)) }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="userId" label="用户id"> </el-table-column>
    <el-table-column prop="sdkVersion" label="SDK版本"> </el-table-column>
    <el-table-column prop="deviceInfo" label="浏览器信息">
      <template #default="scope">
        <span>{{ scope.row.deviceInfo.browser }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="deviceInfo" label="操作系统">
      <template #default="scope">
        <span>{{ scope.row.deviceInfo.os }}</span>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="代码还原" width="100">
      <template #default="scope">
        <el-button
          v-if="scope.row.type == 'error' || scope.row.type == 'unhandledrejection'"
          type="primary"
          size="small"
          @click="revertCode(scope.row)"
          >查看源码</el-button
        >
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="播放录屏" width="100">
      <template #default="scope">
        <el-button
          v-if="scope.row.recordScreenId"
          type="primary"
          size="small"
          @click="playRecord(scope.row.recordScreenId)"
          >播放录屏</el-button
        >
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="用户行为记录" width="125">
      <template #default="scope">
        <el-button
          size="small"
          v-if="scope.row.breadcrumb"
          type="primary"
          @click="revertBehavior(scope.row)"
          >查看用户行为</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <div class="flex flex-row-reverse mt-5">
    <el-pagination
      v-model:current-page="dataInfo.current"
      :page-size="dataInfo.pageSize"
      layout="prev, pager, next"
      :total="dataInfo.total"
      @current-change="getList"
    />
  </div>
  <el-dialog
    :title="dialogTitle"
    top="10vh"
    v-model="dialogVisible"
    width="60%"
    style="height: 80vh; overflow-y: auto"
    :destroy-on-close="true"
  >
    <div v-if="dialogTitle !== '查看用户行为'" ref="revert" id="revert"></div>
    <el-timeline v-else>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :color="activity.color"
        :timestamp="dayjs(activity.time).format('YYYY-MM-DD HH:mm:ss')"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </el-dialog>
</template>
<script setup lang="ts">
import { useRequest } from '@/utils/request'
import { useRoute } from 'vue-router'
import { reactive, ref, nextTick, onMounted } from 'vue'
import { unzip } from '../utils/recordScreen'
// @ts-ignore
import rrwebPlayer from 'rrweb-player'
import 'rrweb-player/dist/style.css'
import dayjs from 'dayjs'
import { findCodeBySourceMap } from '@/utils/sourcemap'
import { ElLoading, ElMessage } from 'element-plus'
const route = useRoute()
const dialogVisible = ref(false)
const dialogTitle = ref('')
const revert = ref<HTMLDivElement>()
const activities = ref<any[]>([])
const dataInfo = reactive({
  current: 1,
  pageSize: 10,
  total: 1,
  list: [],
  name: '',
  date: [dayjs().subtract(1, 'month'), dayjs()]
})
const loading = ref(false)
const selectLen = ref([])

onMounted(() => {
  getList()
})

const getList = () => {
  loading.value = true
  useRequest('monitor/list', {
    params: {
      projectId: route.query.id,
      current: dataInfo.current,
      pageSize: dataInfo.pageSize,
      name: dataInfo.name,
      startTime: dayjs(dataInfo.date[0]).format('YYYY-MM-DD'),
      endTime: dayjs(dataInfo.date[1]).format('YYYY-MM-DD')
    }
  }).then((res: any) => {
    dataInfo.total = res.data.value.total
    dataInfo.list = res.data.value.lists
    loading.value = false
  })
}

const revertBehavior = ({ breadcrumb }: { breadcrumb: any }) => {
  dialogVisible.value = true
  dialogTitle.value = '查看用户行为'
  breadcrumb.forEach((item: any) => {
    item.color = item.status == 'ok' ? '#5FF713' : '#F70B0B'
    item.icon = item.status == 'ok' ? 'el-icon-check' : 'el-icon-close'
    if (item.category == 'Click') {
      item.content = `用户点击dom: ${item.data}`
    } else if (item.category == 'Http') {
      item.content = `调用接口: ${item.data.url}, ${item.status == 'ok' ? '请求成功' : '请求失败'}`
    } else if (item.category == 'Code_Error') {
      item.content = `代码报错：${item.data.message}`
    } else if (item.category == 'Resource_Error') {
      item.content = `加载资源报错：${item.message}`
    } else if (item.category == 'Route') {
      item.content = `路由变化：从 ${item.data.from}页面 切换到 ${item.data.to}页面`
    }
  })
  activities.value = breadcrumb
}

const playRecord = async (recordScreenId: string) => {
  loading.value = true
  const { error, data } = await useRequest<{
    events: string
  }>('monitor/screen?screenId=' + recordScreenId)
  loading.value = false
  if (error.value) {
    ElMessage.error(error.value)
    return
  }
  // const result = data.value
  dialogVisible.value = true
  dialogTitle.value = '播放录屏'
  let events = unzip(data.value!.events.toString())
  nextTick(() => {
    new rrwebPlayer(
      {
        target: document.getElementById('revert') as HTMLElement,
        data: {
          events
        }
      },
      // @ts-ignore
      {
        UNSAFE_replayCanvas: true
      }
    )
  })
}

function format(time: number) {
  let str = new Date(time)
  return str.toLocaleDateString().replace(/\//g, '-') + ' ' + str.toTimeString().substr(0, 8)
}

function revertCode(obj: any) {
  // console.log('obj', obj)
  const tip = ElMessage({
    message: '文件解析需要一段时间，请稍侯....',
    type: 'warning',
    duration: 0
  })
  loading.value = true
  findCodeBySourceMap(obj, (res: string) => {
    // console.log('res')
    dialogVisible.value = true
    tip.close()
    dialogTitle.value = '查看源码'
    loading.value = false
    nextTick(() => {
      revert.value!.innerHTML = res
    })
  })
}

function handleSelectionChange(val: any) {
  selectLen.value = val
}

async function deleteMany() {
  loading.value = true
  const { error } = await useRequest('monitor/delete', {
    method: 'delete',
    params: {
      ids: selectLen.value.map((_: any) => _._id)
    }
  })
  if (!error.value) {
    ElMessage.success('删除成功！')
    selectLen.value = []
    loading.value = false
    getList()
  }
}
</script>
<style lang="scss">
.overflow-container {
  display: -webkit-box;
  overflow: hidden;
  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}

.errdetail {
  text-align: left;
  width: 100%;
  font-size: 16px;
}

.code-line {
  padding: 5px 0;
}
.heightlight {
  background-color: yellowgreen;
}
.errheader {
  padding: 10px;
  border-bottom: 1px solid rgb(214, 210, 210);
}
</style>
