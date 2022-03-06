<template>
  <div class="user-info">
    <template v-for="(value, key, index) in userInfo" :key="index"
      >{{ key }} {{ value }} <br />
    </template>
  </div>
</template>

<script setup>
import { getUserInfo } from '../../../../service/main/page/setting'
import LocalCache from '../../../../utils/localCache'

let uid = LocalCache.get('number')

let userInfo = reactive({})

getUserInfo(uid).then((res) => {
  let result = res.data
  for (let key in result) {
    userInfo[key] = result[key]
  }
})
</script>

<style></style>
