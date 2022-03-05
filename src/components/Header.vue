<template>
  <div class="heaader">
    <div class="left"></div>
    <div class="right">
      <div class="userImg">
        <el-avatar shape="square" :size="30" :src="url"></el-avatar>
      </div>
      <!-- <div class="userInfo">
        {{'aa'}}
      </div> -->
      <el-button @click="out">退出</el-button>
    </div>
  </div>
</template>

<script setup>
import { getUserImg } from '../service/main/index'
import LocalCache from '../utils/localCache'
import { useRouter } from 'vue-router'

let { uid } = LocalCache.get('profile').originalUserDB

let url = ref('')
getUserImg(uid).then(
  (res) => {
    res.data && res.data.path && (url.value = res.data.path)
  },
  (err) => {
    ElMessage.error(err)
  }
)

// 退出登录
let router = useRouter()
function out() {
  LocalCache.clear()
  router.replace('/login')
}
</script>

<style scrope lang="less">
.heaader {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .right {
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
}
</style>
