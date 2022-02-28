<template>
  <el-menu
    router="true"
    background-color="#2365c4"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="item in navMenu" :key="item.path">
      <template v-if="!item.children">
        <el-menu-item :index="item.path" @click="aaa">
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </template>
        </el-menu-item>
      </template>
      <template v-if="item.children">
        <el-sub-menu>
          <template #title>
            <el-icon><location /></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item
            v-for="subitem in item.children"
            :key="subitem.path"
            :index="subitem.path"
            >{{ subitem.name }}</el-menu-item
          >
        </el-sub-menu>
      </template>
    </template>
  </el-menu>
</template>

<script setup>
import menuConfig from '../config/menu'
import localCache from '../utils/localCache'
import { useRouter } from 'vue-router'
const router = useRouter()
// navMenu
let roleId = localCache.get('roleId')
let navMenu = menuConfig[roleId].navMenu
</script>

<style lang="less">
.el-menu {
  height: calc(100% - 60px);
}
</style>
