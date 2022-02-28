<template>
  <el-menu
    :default-active="navMenu[0].path"
    router="true"
    background-color="#0c2135"
    text-color="#fff"
    active-text-color="#fff"
    class="el-menu-vertical-demo"
    :collapse="false"
    @open="handleOpen"
    @close="handleClose"
  >
    <template v-for="item in navMenu" :key="item.path">
      <template v-if="!item.children">
        <el-menu-item :index="item.path" @click="aaa" style="backgroundcolor: red">
          <template #title>
            <el-icon>
              <Icon :id="item.icon" />
            </el-icon>
            <span>{{ item.name }}</span>
          </template>
        </el-menu-item>
      </template>
      <template v-if="item.children">
        <el-sub-menu>
          <template #title>
            <el-icon><Icon :id="item.icon" /></el-icon>
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
  .is-active {
    background-color: #0960bd;
  }
}
</style>
