import http from '@/service'

export declare interface Type {
  a: number
}

export function foo(): Promise<Type> {
  return http.get<Type>({
    url: '/get',
    params: { a: 1, b: 1 },
  })
}
