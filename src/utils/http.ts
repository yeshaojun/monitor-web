import { createFetch } from '@vueuse/core'
import { useLocalStorage } from '@vueuse/core'
import { ElMessage } from 'element-plus'

const useMyFetch = createFetch({
  baseUrl: 'http://localhost:9000/v1/',
  options: {
    onFetchError(ctx) {
      console.log('ctx', ctx)
      ElMessage.error(JSON.parse(ctx.data).msg)
      return ctx
    }
  },
  fetchOptions: {
    mode: 'cors',
    headers: {
      token: useLocalStorage('token', '').value
    }
  }
})

export { useMyFetch }
