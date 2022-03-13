<template>
  <div class="write-textimonials">
    <my-form :formDate="formDate" :config="config" labelWidth="90px" labelPosition="left"></my-form>
  </div>
</template>

<script setup>
import { reactive } from '@vue/reactivity'

let formDate = reactive({
  file: '',
  pwinner: '', //获奖者
  ptime: '', //发证时间
  psponsor: '', // 发证机构
  plevel: '', //奖项分类
  pname: '', // 比赛名称
  tid: '', // 指导老师
  category: [], //奖项类别单人, 团体
  title: '', // 称号
  number: '', // 证书编号
  faculty: '', // 学院
  grade: '',
  level: [], // 奖项等级
  isDelete: '', // 获奖人id
  judge: [], // 学生:0, 老师:1
})

let config = ref([
  {
    label: '获奖人',
    field: 'pwinner',
    placeholder: '请输入学期',
    type: 'input',
    width: '420px',
  },
  {
    label: '发证时间',
    field: 'ptime',
    placeholder: '请输入课程',
    type: 'input',
    width: '420px',
    options: [],
  },
  {
    label: '发证机构',
    field: 'leixing',
    placeholder: '请输入类型',
    type: 'input',
    width: '420px',
  },
  {
    label: '奖项分类',
    field: 'plevel',
    placeholder: '请输入层次',
    type: 'input',
    width: '420px',
  },
  {
    label: '比赛名称',
    field: 'pname',
    placeholder: '请输入专业',
    type: 'input',
    width: '420px',
  },
  {
    label: '指导老师',
    field: 'tid',
    placeholder: '请输入年纪',
    type: 'select',
    width: '420px',
    options: [],
  },
  {
    label: '奖项类别',
    field: 'category',
    placeholder: '请选择状态',
    type: 'radioBox',
    width: '420px',
    radioboxs: [
      {
        label: '单人',
        value: '1',
      },
      {
        label: '团体',
        value: '2',
      },
    ],
  },
  {
    label: '称号',
    field: 'title',
    placeholder: '请输入年纪',
    type: 'input',
    width: '420px',
  },
  {
    label: '证书编号',
    field: 'number',
    placeholder: '请输入年纪',
    type: 'input',
    width: '420px',
  },
  {
    label: '学院',
    field: 'faculty',
    placeholder: '请输入年纪',
    type: 'input',
    width: '420px',
  },
  {
    label: '年纪',
    field: 'grade',
    placeholder: '请输入年纪',
    type: 'input',
    width: '420px',
  },
  {
    label: '奖项等级',
    field: 'level',
    placeholder: '请输入年纪',
    type: 'radioBox',
    width: '420px',
    radioboxs: [
      {
        label: '一等奖',
        value: '一等奖',
      },
      {
        label: '二等奖',
        value: '二等奖',
      },
      {
        label: '三等奖',
        value: '三等奖',
      },
    ],
  },
  {
    label: '获奖人id',
    field: 'idDelete',
    placeholder: '请输入年纪',
    type: 'input',
    width: '420px',
  },
  {
    label: '老师or学生',
    field: 'judge',
    placeholder: '请输入年纪',
    type: 'radioBox',
    width: '420px',
    radioboxs: [
      {
        label: '学生',
        value: '0',
      },
      {
        label: '老师',
        value: '1',
      },
    ],
  },
])
</script>

<style lang="less" scoped>
.write-textimonials {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 15px;
}
</style>
