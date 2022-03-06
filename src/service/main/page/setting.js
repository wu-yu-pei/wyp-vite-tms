import { http } from '../../index'

export function getUserInfo(uid) {
  return http.get({
    url: '/manangmentSystem/user/getUser',
    params: { number: uid },
  })
}

export function changeUserPassword({ uid, newPasswd, oldPasswd }) {
  return http.put({
    url: '/manangmentSystem/user/updatePw',
    params: {
      number: uid,
      newPasswd,
      oldPasswd,
    },
  })
}
