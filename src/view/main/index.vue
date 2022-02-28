<template>
  <el-container>
    <el-aside width="200px">
      <div class="aside-top">WYP-VITE-TMS</div>
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <!-- <router-view> </router-view> -->
        <router-view v-slot="{ Component }">
          <transition name="main" mode="out-in">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup></script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}
.el-container {
  width: 100vw;
  height: 100vh;
  .el-aside {
    .aside-top {
      text-align: center;
      line-height: 60px;
      width: 100%;
      height: 60px;
      background-color: #0c2135;
      color: #fff;
    }
  }
}
// 路由动画
.main-enter-from {
  transform: translateX(-10px);
  opacity: 0;
}
.main-enter-to {
  transform: translateX(0px);
  opacity: 1;
}
.main-leave-from {
  transform: translateX(0px);
  opacity: 1;
}
.main-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.main-enter-active {
  transition: all linear 0.3s;
}
.main-leave-active {
  transition: all linear 0.3s;
}
</style>
