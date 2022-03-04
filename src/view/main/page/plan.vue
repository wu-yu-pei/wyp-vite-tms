<template>
  <div>
    <my-pdf :url="url"></my-pdf>
  </div>
</template>

<script setup>
const url = ref('api/manangmentSystem/file/a.pdf')
</script>

<style lang="less"></style>
