<template>
  <div class="plan">
    <my-pdf :url="url"></my-pdf>
  </div>
</template>

<script setup>
const url = ref('api/manangmentSystem/file/a.pdf')
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
