import { http } from '../index'

export function getKeChenList() {
  return http.get({
    url: '/manangmentSystem/user/getCourseInformation',
  })
}

export function getAllKecheng({
  pageNumber = 1,
  pageSize = 5,
  condition = 1,
  fileType,
  semester = 1,
  fileName,
  uid,
  sta = 1,
  grade,
}) {
  return http.request({
    url: '/manangmentSystem/fileOperate/getAllFiles',
    params: {
      pageNumber,
      pageSize,
      uid,
      condition,
      fileType,
      semester,
      fileName,
      sta,
      grade,
    },
  })
}
