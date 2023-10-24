<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { RouterView, useRoute } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
import { ref, onMounted, computed } from 'vue'
import { ElLoading, ElMessage } from 'element-plus'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import { useMyFetch } from './utils/http'
const route = useRoute()
const localStorage = window.localStorage
const visible = ref(false)
const checkList = ref([])

const config = computed(() => ({
  noticeAuth: checkList.value
}))

const { isFetching, data, execute, error } = useMyFetch('user/auth', {
  immediate: false
})
  .put(config)
  .json()

async function saveConfig() {
  await execute()
  if (!error.value) {
    visible.value = false
    ElMessage.success('设置成功！')
    localStorage.setItem('userInfo', JSON.stringify(data.value))
  }
}

onMounted(() => {
  if (localStorage.getItem('userInfo')) {
    checkList.value = JSON.parse(localStorage.getItem('userInfo') as string).noticeAuth
  }

  // @ts-ignore
  dd &&
    // @ts-ignore
    dd.getAuthCode({
      corpId: '',
      success: (res: any) => {
        console.log('res', res)
        alert(res)
      },
      fail: (err: any) => {
        alert('fail' + err)
      }
    })
})
</script>
<template>
  <el-config-provider :locale="zhCn">
    <div v-if="route.path !== '/login'">
      <el-container class="h-screen">
        <el-header class="flex items-center justify-between" style="background-color: #20293a">
          <div class="text-white text-4xl" sty>MONITOR SYSTEM</div>
          <el-dropdown>
            <div class="text-1xl">
              <span class="text-white">
                {{
                  localStorage.getItem('userInfo')
                    ? JSON.parse(localStorage.getItem('userInfo') as string).nickname
                    : ''
                }}
              </span>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="visible = true">通知设置</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <el-menu
              active-text-color="#c957e8"
              background-color="#354154"
              class="h-full"
              default-active="/project"
              router
              text-color="#fff"
            >
              <el-menu-item index="/project">
                <el-icon><icon-menu /></el-icon>
                <span>项目列表</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
          <el-main>
            <RouterView />
          </el-main>
        </el-container>
      </el-container>
    </div>
    <RouterView v-else />
    <el-dialog v-model="visible" title="通知权限设置" width="30%">
      <div>
        <el-checkbox-group v-model="checkList">
          <el-checkbox label="js">代码异常</el-checkbox>
          <el-checkbox label="api">接口异常</el-checkbox>
          <el-checkbox label="promise">promise异常</el-checkbox>
          <el-checkbox label="resource">资源异常</el-checkbox>
          <el-checkbox label="custom">主动上报信息</el-checkbox>
        </el-checkbox-group>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="visible = false">取消</el-button>
          <el-button type="primary" :disabled="isFetching" @click="saveConfig"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </el-config-provider>
</template>
