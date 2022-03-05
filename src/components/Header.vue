<template>
  <div class="heaader">
    <div class="left"></div>
    <div class="right">
      <div class="userImg">
        <el-avatar shape="square" :size="30" :src="url"></el-avatar>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ username }}<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <template v-for="item in infoMenu" :key="item.name">
              <router-link :to="item.path">
                <el-dropdown-item :icon="item.icon">{{ item.name }}</el-dropdown-item>
              </router-link>
            </template>
            <el-dropdown-item>修改图像</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item @click="out">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <!-- <el-button @click="out">退出</el-button> -->
    </div>
  </div>
</template>

<script setup>
import { getUserImg } from '../service/main/index'
import LocalCache from '../utils/localCache'
import { useRouter } from 'vue-router'

let { uid, username } = LocalCache.get('profile').originalUserDB
let infoMenu = LocalCache.get('infoMenu')
let url = ref('http://39.103.181.186:80')
getUserImg(uid).then(
  (res) => {
    res.data && res.data.path && (url.value += res.data.path)
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
    width: 150px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
}
.el-dropdown {
  margin-right: 20px;
  line-height: 34px;
}
</style>
