import { createFetch } from '@vueuse/core'
import { ElMessage } from 'element-plus'

const base = 'http://api.yeshaojun.com/v1/'
// const base = 'http://localhost:9500/v1/'
const useMyFetch = createFetch({
  baseUrl: base,
  options: {
    beforeFetch(ctx: any) {
      ctx.options.headers.token = localStorage.getItem('token') as string
      return ctx
    },
    onFetchError(ctx) {
      if (JSON.parse(ctx.data).errorCode === 10006) {
        window.location.href = '/login'
        localStorage.clear()
        return ctx
      }
      const msg = JSON.parse(ctx.data).msg
      if (typeof msg === 'string') {
        ElMessage.error(JSON.parse(ctx.data).msg)
      } else {
        ElMessage.error(JSON.parse(ctx.data).msg.join(','))
      }
      return Promise.reject(msg)
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
})

export { useMyFetch }
