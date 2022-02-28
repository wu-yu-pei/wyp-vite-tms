import { http } from '..'

export function getCode() {
  return http.get({
    url: '/manangmentSystem/user/getCode',
  })
}

export function logOn(data) {
  return http.post({
    url: '/manangmentSystem/user/tologin',
    params: data,
  })
}
