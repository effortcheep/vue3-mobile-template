import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export const requestInterceptor = (
  config: AxiosRequestConfig,
): AxiosRequestConfig => {
  return config
}

export const responseInterceptor = (res: AxiosResponse): AxiosResponse => {
  return res
}
