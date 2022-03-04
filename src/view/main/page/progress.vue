<template>
  <div>
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

let formDate = reactive({
  xueqi: '',
  kecheng: '',
  zhuanye: '',
  nianji: '',
  cenci: '',
})

let config = ref([
  {
    lable: '学期',
    field: 'xueqi',
    placeholder: '请输入学期',
    type: 'select',
    width: '300px',
    options: [
      {
        lable: '2020-2021第1学期',
        value: '2020-2021第1学期',
      },
      {
        lable: '2020-2021第2学期',
        value: '2020-2021第2学期',
      },
      {
        lable: '2021-2022第1学期',
        value: '2021-2022第1学期',
      },
      {
        lable: '2021-2022第2学期',
        value: '2021-2022第2学期',
      },
      {
        lable: '2022-2023第1学期',
        value: '2022-2023第2学期',
      },
      {
        lable: '2023-2024第1学期',
        value: '2023-2024第2学期',
      },
    ],
  },
  {
    lable: '课程',
    field: 'kecheng',
    placeholder: '请输入课程',
    type: 'select',
    width: '300px',
    options: [
      {
        lable: '《电路基础》',
        value: '《电路基础》',
      },
      {
        lable: '《数字逻辑》',
        value: '《数字逻辑》',
      },
      {
        lable: '《软件工程》',
        value: '《软件工程》',
      },
    ],
  },
  {
    lable: '层次',
    field: 'cenci',
    placeholder: '请输入层次',
    type: 'select',
    width: '300px',
    roleId: roleId,
    options: [
      {
        lable: '1',
        value: '本科',
      },
      {
        lable: '0',
        value: '专科',
      },
    ],
  },
  {
    lable: '专业',
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
    lable: '年级',
    field: 'nianji',
    placeholder: '请输入年纪',
    type: 'select',
    width: '300px',
    roleId: roleId,
    options: [
      {
        lable: '2019',
        value: '2019',
      },
      {
        lable: '2020',
        value: '2020',
      },
      {
        lable: '2021',
        value: '2021',
      },
      {
        lable: '2022',
        value: '2022',
      },
      {
        lable: '2023',
        value: '2023',
      },
    ],
  },
])

let tableDate = reactive([
  {
    xuhao: '01',
    xueqi: '2',
    xueyuan: '计科',
    zhuanye: '计算机',
    grade: '19级',
    kecheng: 'C语言',
    cenci: '1',
    sta: '0',
  },
])

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

let teacherDate = reactive()

let teacherConfig = ref()

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
      lable: j,
      value: `${i - 1}-${i}第一学期`,
    })
    j++
    res.push({
      value: `${i - 1}-${i}第二学期`,
      lable: j,
    })
    j++
  }
  config.value[0].options = res
}
setXueqi()

/**
 * 获取课程列表
 */
getKeChenList().then((res) => {
  let list = res.data
  let listmap = list.map((item) => ({
    lable: item,
    value: item,
  }))
  config.value[1].options = listmap
})

/**
 * 查询
 */
function query() {
  getAllKecheng({ fileName: formDate.kecheng, uid: userInfo.originalUserDB.uid }).then((res) => {
    console.log(res)
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

<style scoped></style>
