<template>
  <div>
    <el-icon :size="17 + 'px'">
      <HomeFilled v-if="id == 1" />
      <List v-if="id == 2" />
      <Stopwatch v-if="id == 3" />
      <Reading v-if="id == 4" />
      <Files v-if="id == 5" />
    </el-icon>
  </div>
</template>

<script setup>
const a = defineProps({
  id: String,
})
console.log(a)
</script>

<style></style>
