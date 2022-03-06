<template>
  <div class="syllabus">
    <my-form :formDate="formDate" :config="config">
      <template #control>
        <el-button @click="query">查询</el-button>
        <el-button @click="reset">重置</el-button>
        <el-button v-isStudent="roleId" @click="reset">上传</el-button>
      </template>
    </my-form>
    <my-table :config="tableConfig" :tableDate="tableDate"></my-table>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity'
import { getAllKecheng, getKeChenList } from '../../../service/main/syllabus'
import LocalCache from '../../../utils/localCache'

let userInfo = LocalCache.get('profile')

let roleId = userInfo.originalUserDB.roleId

let grade = userInfo.originalUserDB.grade

let major = userInfo.originalUserDB.major

let level = userInfo.originalUserDB.level

let faculty = userInfo.originalUserDB.faculty

let formDate = reactive({
  xueqi: '',
  kecheng: '',
  zhuanye: '',
  nianji: '',
  cenci: '',
  leixing: '',
  zhuangtai: [],
})

let config = ref([
  {
    label: '学期',
    field: 'xueqi',
    placeholder: '请输入学期',
    type: 'select',
    width: '300px',
    options: [
      {
        label: '2020-2021第1学期',
        value: '2020-2021第1学期',
      },
      {
        label: '2020-2021第2学期',
        value: '2020-2021第2学期',
      },
      {
        label: '2021-2022第1学期',
        value: '2021-2022第1学期',
      },
      {
        label: '2021-2022第2学期',
        value: '2021-2022第2学期',
      },
      {
        label: '2022-2023第1学期',
        value: '2022-2023第2学期',
      },
      {
        label: '2023-2024第1学期',
        value: '2023-2024第2学期',
      },
    ],
  },
  {
    label: '课程',
    field: 'kecheng',
    placeholder: '请输入课程',
    type: 'select',
    width: '300px',
    options: [],
  },
  {
    label: '类型',
    field: 'leixing',
    placeholder: '请输入类型',
    type: 'select',
    width: '300px',
    options: [
      {
        label: '课程介绍',
        value: '10',
      },
      {
        label: '理论教学大纲',
        value: '11',
      },
      {
        label: '考试大纲',
        value: '12',
      },
      {
        label: '实验教学大纲',
        value: '13',
      },
    ],
  },
  {
    label: '层次',
    field: 'cenci',
    placeholder: '请输入层次',
    type: 'select',
    width: '300px',
    roleId: roleId,
    options: [
      {
        label: '本科',
        value: '1',
      },
      {
        label: '专科',
        value: '0',
      },
    ],
  },
  {
    label: '专业',
    field: 'zhuanye',
    placeholder: '请输入专业',
    type: 'input',
    width: '300px',
    roleId: roleId,
    // options: [
    //   {
    //     lable: '1',
    //     value: '本科',
    //   },
    //   {
    //     lable: '0',
    //     value: '专科',
    //   },
    // ],
  },
  {
    label: '年级',
    field: 'nianji',
    placeholder: '请输入年纪',
    type: 'select',
    width: '300px',
    roleId: roleId,
    options: [],
  },
  {
    label: '状态',
    field: 'zhuangtai',
    placeholder: '请选择状态',
    type: 'checkBox',
    width: '400px',
    roleId: roleId,
    checkboxs: [
      {
        label: '审核通过',
        value: '1',
      },
      {
        label: '审核未通过',
        value: '2',
      },
      {
        label: '待审核',
        value: '3',
      },
    ],
  },
])

let tableDate = reactive([])

let tableConfig = ref([
  {
    prop: 'xuhao',
    label: '序号',
    width: '120',
    fixed: 'true',
  },
  {
    prop: 'xueqi',
    label: '学期',
    width: '200',
  },
  {
    prop: 'xueyuan',
    label: '学院',
    width: '200',
  },
  {
    prop: 'zhuanye',
    label: '专业',
    width: '120',
  },
  {
    prop: 'grade',
    label: '年纪',
    width: '120',
  },
  {
    prop: 'kecheng',
    label: '课程名称',
    width: '300',
  },
  {
    prop: 'cenci',
    label: '层次',
    width: '200',
  },
  {
    prop: 'sta',
    label: '状态',
    width: '120',
    fixed: 'right',
  },
])

/**
 * 计算学期
 * 暂时设为2019
 */
function setXueqi() {
  let { grade } = userInfo.originalUserDB
  // TODO
  grade = 2019
  let year = new Date().getFullYear()
  grade = grade === year ? grade : grade + 1
  let res = []
  for (let i = grade, j = 1; i <= year; i++) {
    res.push({
      value: j,
      label: `${i - 1}-${i}第一学期`,
    })
    j++
    res.push({
      value: j,
      label: `${i - 1}-${i}第二学期`,
    })
    j++
  }
  config.value[0].options = res
}
setXueqi()

/**
 *计算年级
 */

function setGrade() {
  let startYear = new Date().getFullYear()
  let endYear = startYear - 4
  for (; endYear <= startYear; endYear++) {
    config.value[5].options.push({
      label: endYear,
      value: endYear,
    })
  }
}
setGrade()

/**
 * 根据学期查课程
 */
watch(
  () => formDate.xueqi,
  (n, o) => {
    getKeChenList({
      major,
      grade,
      level,
      collegeName: faculty,
      semester: n,
    }).then((res) => {
      if (res.code !== 200) {
        config.value[1].options = []
        return
      }
      let list = res.data
      let listmap = list.map((item) => ({
        lable: item,
        value: item,
      }))
      config.value[1].options = listmap
    })
  },
  {
    deep: true,
  }
)

/**
 * 查询
 */
function query() {
  getAllKecheng({
    fileName: formDate.kecheng,
    uid: userInfo.originalUserDB.uid,
    semester: formDate.xueqi,
    fileType: formDate.leixing,
    grade,
  })
    .then((res) => {
      if (res.code === 200) {
        let list = res.data.list
        for (let item in list) {
          tableDate.push(item)
        }
        // tableDate.push({
        //   xuhao: '200',
        //   xueqi: '2',
        //   xueyuan: '计科',
        //   zhuanye: '计算机',
        //   grade: '19级',
        //   kecheng: 'C语言',
        //   cenci: '1',
        //   sta: '0',
        // })
      } else {
        ElMessage.error('查询失败')
      }
    })
    .catch((error) => {
      ElMessage.error('error')
    })
}

/**
 * 重置查询输入框
 */
function reset() {
  for (let key in formDate) {
    formDate[key] = ''
  }
}
</script>

<style scoped>
.syllabus {
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fff;
}
</style>
