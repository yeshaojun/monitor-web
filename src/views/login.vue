<template>
  <el-form ref="formInstace" :model="user" label-width="120px">
    <el-form-item
      prop="email"
      label="Email"
      :rules="[
        {
          required: true,
          message: 'Please input email address',
          trigger: 'blur'
        },
        {
          type: 'email',
          message: 'Please input correct email address',
          trigger: ['blur', 'change']
        }
      ]"
    >
      <el-input v-model="user.email" />
    </el-form-item>
    <el-form-item
      prop="password"
      label="password"
      :rules="[
        {
          required: true,
          message: 'Please input password',
          trigger: 'blur'
        }
      ]"
    >
      <el-input type="password" v-model="user.password" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login" v-loading="isFetching">登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useMyFetch } from '@/utils/http'
import { useLocalStorage } from '@vueuse/core'
import { useRouter } from 'vue-router'
const router = useRouter()
const user = reactive({
  email: 'yeshaojun5056@163.com',
  password: 'qq5056'
})

const { isFetching, data, execute } = useMyFetch('user/login', {
  immediate: false
}).post(user)

const formInstace = ref<FormInstance>()
function login() {
  formInstace.value?.validate(async (valid) => {
    if (valid) {
      await execute()
      if (data.value) {
        useLocalStorage('token', JSON.parse(data.value as string)?.token)
        ElMessage.success('登录成功')
        router.push('/')
      }
    }
  })
}
</script>
<style lang="scss"></style>
