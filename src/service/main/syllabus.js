import { http } from '../index'

export function getKeChenList({ major, grade, level, collegeName, semester }) {
  console.log(level)
  return http.get({
    url: '/manangmentSystem/user/getCourseInformation',
    params: {
      major,
      grade,
      level,
      collegeName,
      semester,
    },
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
