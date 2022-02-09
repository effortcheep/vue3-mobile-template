import axios from 'axios'

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

interface SJRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface SJRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: SJRequestInterceptors<T>
}

class SJRequest {
  instance: AxiosInstance
  interceptors?: SJRequestInterceptors

  constructor(config: SJRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch,
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch,
    )

    this.instance.interceptors.request.use(
      config => {
        return config
      },
      err => {
        return err
      },
    )

    this.instance.interceptors.response.use(
      res => {
        return res.data
      },
      err => {
        return err
      },
    )
  }

  request<T>(config: SJRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      this.instance
        .request<any, T>(config)
        .then(res => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors?.responseInterceptor(res)
          }
          resolve(res)
        })
        .catch(err => {
          reject(err)
          return err
        })
    })
  }

  get<T>(config: SJRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }

  post<T>(config: SJRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
}

export default SJRequest
