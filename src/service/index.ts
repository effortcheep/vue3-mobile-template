import SJRequest from './request'
import { requestInterceptor, responseInterceptor } from './request/interceptors'
const baseURL = import.meta.env.VITE_APP_HOST || 'http://baidu1.com'
const http = new SJRequest({
  baseURL,
  timeout: 30 * 1000,
  interceptors: {
    requestInterceptor,
    responseInterceptor,
  },
})

export default http
