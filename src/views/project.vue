<template>
  <div class="mb-5">
    <el-button type="primary" @click="addProject">新增</el-button>
  </div>
  <el-table stripe :data="JSON.parse(data as string)" style="width: 100%" v-loading="isFetching">
    <el-table-column prop="_id" label="apiKey" />
    <el-table-column prop="name" label="项目名称" />
    <el-table-column prop="desc" label="描述" />
    <el-table-column prop="created_at" label="创建时间" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button type="primary" size="small" @click="toError(scope.row._id)">查看日志</el-button>
        <el-button link type="primary" size="small" @click="remove(scope.row._id)">移除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="visible" title="新增项目" width="30%">
    <el-form :form="form">
      <el-form-item label="项目名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="项目描述">
        <el-input v-model="form.desc"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="visible = false">取消</el-button>
        <el-button type="primary" @click="create" v-loading="createFetching"> 创建 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { useMyFetch } from '@/utils/http'
import { ElLoading, ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const visible = ref(false)
const form = reactive({
  name: '',
  desc: ''
})
const { isFetching, data, execute } = useMyFetch('project/list').get()
const {
  isFetching: createFetching,
  data: createData,
  execute: createExecute
} = useMyFetch('project/create', {
  immediate: false
}).post(form)

const remove = async (id: string) => {
  const loading = ElLoading.service({
    fullscreen: true,
    text: '数据删除中'
  })
  const { data } = await useMyFetch(`project/${id}`).delete()
  if (data) {
    loading.close()
    execute()
  }
}
function addProject() {
  visible.value = true
  form.name = ''
  form.desc = ''
}

async function create() {
  await createExecute()
  if (createData) {
    ElMessage.success('创建成功！')
    visible.value = false
    execute()
  }
}

function toError(id: string) {
  router.push({
    path: '/error',
    query: {
      id
    }
  })
}
</script>
