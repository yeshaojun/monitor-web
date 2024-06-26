<template>
  <div class="mb-5">
    <el-button type="primary" @click="addProject">新增</el-button>
  </div>
  <el-table stripe :data="data" style="width: 100%" v-loading="loading">
    <el-table-column prop="_id" label="apiKey" />
    <el-table-column prop="name" label="项目名称" />
    <el-table-column prop="desc" label="描述" />
    <el-table-column label="项目成员">
      <template #default="scope">
        <el-tag v-for="item in scope.row.member" :key="item._id" class="ml-2" type="success">{{
          item.nickName
        }}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="createdAt" label="创建时间" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-space>
          <el-button type="primary" size="small" @click="toError(scope.row._id)"
            >查看日志</el-button
          >
          <el-button
            type="primary"
            size="small"
            v-if="userInfo.id !== scope.row.createUser"
            @click="logoutProject(scope.row._id)"
            >退出项目</el-button
          >
          <el-button
            type="primary"
            size="small"
            v-if="userInfo.id === scope.row.createUser"
            @click="setMember(scope.row._id, scope.row.member)"
            >添加成员</el-button
          >
          <el-button
            v-if="userInfo.id === scope.row.createUser"
            link
            type="primary"
            size="small"
            @click="remove(scope.row._id)"
            >移除项目</el-button
          >
        </el-space>
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

  <el-dialog v-model="memberVisible" title="添加项目成员" width="30%">
    <el-select v-model="addMemberInfo.users" multiple style="width: 100%">
      <el-option v-for="item in userData" :key="item._id" :value="item._id" :label="item.nickName">
      </el-option>
    </el-select>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="memberVisible = false">取消</el-button>
        <el-button type="primary" @click="addMember" v-loading="createFetching"> 创建 </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import { useRequest } from '@/utils/request'
import { ElLoading, ElMessage } from 'element-plus'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
const userInfo = JSON.parse(localStorage.getItem('userInfo') as string)
const router = useRouter()
const visible = ref(false)
const memberVisible = ref(false)
const form = reactive({
  name: '',
  desc: ''
})
const addMemberInfo = reactive<{
  users: string[]
  id: string
}>({
  users: [],
  id: ''
})

const { loading, data, execute } = useRequest('project/list')
const { data: userData } = useRequest<
  {
    _id: string
    nickName: string
  }[]
>('user/list')

const {
  loading: createFetching,
  data: createData,
  execute: createExecute
} = useRequest(
  'project/create',
  {
    method: 'post',
    data: form
  },
  {
    immediate: false
  }
)

const remove = async (id: string) => {
  const loading = ElLoading.service({
    fullscreen: true,
    text: '数据删除中'
  })
  const { data } = await useRequest(`project/${id}`, {
    method: 'delete'
  })
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

async function addMember() {
  // const { error } = await useMyFetch('project/member').put(addMemberInfo).json()
  // if (!error.value) {
  //   ElMessage.success('添加成功！')
  //   memberVisible.value = false
  //   execute()
  // }
}

function setMember(id: string, member: string[]) {
  memberVisible.value = true
  addMemberInfo.id = id
  let arr: string[] = []
  userData.value &&
    userData.value.forEach((user: { _id: string }) => {
      if (member.find((_: any) => _._id === user._id)) {
        arr.push(user._id)
      }
    })
  addMemberInfo.users = arr
}
// 退出项目
async function logoutProject(id: string) {
  const { error } = await useRequest(`project/exit?id=${id}`, {
    method: 'put'
  })
  console.log(error.value)
  if (!error.value) {
    ElMessage.success('操作成功！')
    execute()
  }
}
</script>
