<template>
  <div>
    <my-form :formDate="formDate" :config="config">
      <template #control>
        <el-button @click="query">查询</el-button>
        <el-button @click="reset">重置</el-button>
      </template>
    </my-form>
  </div>
</template>

<script setup>
let formDate = reactive({
  xueqi: '',
  kecheg: '',
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
    field: 'kecheg',
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
])

function query() {
  console.log(formDate)
}

function reset() {
  console.log(111)
  for (let key in formDate) {
    formDate[key] = ''
  }
}
</script>

<style></style>
