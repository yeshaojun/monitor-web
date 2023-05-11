<template>
  <div class="wrapper">
    <div class="flex bg-white login-wrapper shadow-lg">
      <img src="../assets/login.png" alt="" />
      <div class="flex-1 p-20">
        <h3 class="text-5xl mb-5 text-center font-semibold font-primary">MONITOR</h3>
        <p class="text-2xl mb-20 text-center text-gray-400">
          A universal front-end monitoring system
        </p>
        <el-form ref="formInstace" :model="user" label-position="left" label-width="120px">
          <el-form-item
            v-if="status === 'register'"
            prop="nickname"
            label="昵称"
            :rules="[
              {
                required: true,
                message: 'Please input email address',
                trigger: 'blur'
              }
            ]"
          >
            <el-input v-model="user.nickname" />
          </el-form-item>
          <el-form-item
            prop="email"
            label="邮箱"
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
            label="密码"
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
          <el-form-item
            v-if="status === 'register'"
            prop="password1"
            label="确认密码"
            :rules="[
              {
                required: true,
                message: 'Please input password',
                trigger: 'blur'
              }
            ]"
          >
            <el-input type="password" v-model="user.password1" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login" v-loading="isFetching">
              {{ status === 'register' ? '注册' : '登录' }}
            </el-button>
            <el-link
              class="ml-5"
              type="info"
              @click="status === 'register' ? (status = 'login') : (status = 'register')"
            >
              {{ status === 'register' ? '去登录' : '免费注册' }}
            </el-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useMyFetch } from '@/utils/http'
import { useRouter } from 'vue-router'
const router = useRouter()
const isFetching = ref(false)
const user = reactive({
  email: '',
  password: '',
  nickname: '',
  password1: ''
})

const status = ref('login')

const formInstace = ref<FormInstance>()
async function login() {
  formInstace.value?.validate(async (valid) => {
    if (valid) {
      if (status.value === 'login') {
        isFetching.value = true
        const { data } = await useMyFetch('user/login').post({
          email: user.email,
          password: user.password
        })
        isFetching.value = false
        if (data.value) {
          localStorage.setItem('token', JSON.parse(data.value as string)?.token)
          ElMessage.success('登录成功')
          router.push('/')
        }
        // useLocalStorage('token', JSON.parse(data.value as string)?.token)
      } else {
        const { error } = await useMyFetch('user/register').post({
          email: user.email,
          password: user.password,
          nickname: user.nickname,
          password1: user.password,
          password2: user.password1
        })
        if (!error) {
          ElMessage.success('注册成功！')
          status.value = 'login'
        }
      }
    }
  })
}
</script>
<style lang="scss">
.login-wrapper {
  width: 1400px;
  height: 80vh;
  margin: 0 auto;
}
.wrapper {
  display: flex;
  align-items: center;
  height: 100vh;
  background-color: #20293a;
}
</style>
