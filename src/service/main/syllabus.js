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
  fileType = 1,
  semester = 1,
  fileName,
  uid,
}) {
  console.log(fileName)
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
    },
  })
}
