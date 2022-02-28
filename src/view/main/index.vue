<template>
  <el-container>
    <el-aside width="200px">
      <div class="aside-top">Logo</div>
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        Main
        <router-view> </router-view>
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
    }
  }
}
</style>
