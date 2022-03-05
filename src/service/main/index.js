import { http } from '../index'
export function getUserImg(uid) {
  return http.get({
    url: '/manangmentSystem/user/getHeadImage',
    params: {
      uid,
    },
  })
}
