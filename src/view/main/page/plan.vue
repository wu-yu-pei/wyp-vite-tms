<template>
  <div class="plan">
    <template v-if="roleId != 0"> 非学生界面 </template>
    <template v-else>
      <my-pdf :url="url"></my-pdf>
    </template>
  </div>
</template>

<script setup>
import LocalCache from '../../../utils/localCache'
const baseUrl = import.meta.env.VITE_APP_BASE_URL
// 用户信息
let { roleId } = LocalCache.get('profile').originalUserDB
// 用户pdfurl
const url = ref(baseUrl + '/manangmentSystem/file/a.pdf')
</script>

<style lang="less">
.plan {
  &::-webkit-scrollbar {
    background-color: #fff;
    width: 6px;
    overflow: visible;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0c2135;
    border-radius: 0;
  }
  &::-webkit-scrollbar-button {
    background-color: #2474b5;
    width: 0px;
    height: 0px;
  }
  &::-webkit-scrollbar-corner {
    background-color: black;
  }
}
</style>
