<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { RouterView, useRoute } from 'vue-router'
import { ElConfigProvider } from 'element-plus'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
const route = useRoute()
const localStorage = window.localStorage
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
                <el-dropdown-item>通知设置</el-dropdown-item>
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
  </el-config-provider>
</template>
