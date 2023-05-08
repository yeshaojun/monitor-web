import { createFetch } from '@vueuse/core'
import { ElMessage } from 'element-plus'

const base = 'http://api.yeshaojun.com/v1/' //'http://localhost:9000/v1/'
const useMyFetch = createFetch({
  baseUrl: base,
  options: {
    beforeFetch(ctx: any) {
      ctx.options.headers.token = localStorage.getItem('token') as string
      return ctx
    },
    onFetchError(ctx) {
      console.log('ctx', ctx)
      if (JSON.parse(ctx.data).errorCode === 10006) {
        window.location.href = '/login'
        localStorage.clear()
        return ctx
      }
      ElMessage.error(JSON.parse(ctx.data).msg)
      return ctx
    }
  },
  fetchOptions: {
    mode: 'cors'
  }
})

export { useMyFetch }
