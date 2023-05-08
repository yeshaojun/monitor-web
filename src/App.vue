<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue'
import { RouterView, useRoute } from 'vue-router'
const route = useRoute()
</script>
<template>
  <div class="" v-if="route.path !== '/login'">
    <el-container class="h-screen">
      <el-header class="bg-gray-800 flex items-center">
        <div class="text-white">前端监控系统</div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
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
</template>
