<template>
  <div class="login">
    <div class="login-top">
      <div class="login-top-left">WYP-VITE-TMS</div>
      <div class="login-top-right">B</div>
    </div>
    <div class="login-panel">
      <el-card class="login-pane-card" shadow="always">
        <h2>登录</h2>
        <el-form :inline="true" :model="state" class="demo-form-inline" :rules="rules" ref="formEl">
          <el-form-item prop="number">
            <el-input placeholder="账号" v-model="state.number" size="large"></el-input>
          </el-form-item>
          <el-form-item prop="passwd">
            <el-input
              placeholder="密码"
              type="password"
              show-password
              v-model="state.passwd"
              size="large"
            ></el-input>
          </el-form-item>
          <el-form-item class="code" prop="code">
            <el-input placeholder="验证码" size="large" v-model="state.code"></el-input>
            <ver-code
              width="120px"
              :word="state.vercode"
              @click="handleVerCodeClick"
              :loading="state.isLoading"
            >
            </ver-code>
          </el-form-item>
          <el-form-item class="control">
            <el-checkbox v-model="state.memary">记住密码</el-checkbox>
            <el-link type="primary">忘记密码</el-link>
          </el-form-item>
          <el-form-item class="logon">
            <el-button type="primary" @click="handleBtnClick(formEl)" :loading="loading"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script setup>
// v-loading="state.isLoading"
// element-loading-background="rgba(0,0,0,0.5)"
import { reactive } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { logOn, getCode } from '../../service/login/index'
import localCache from '../../utils/localCache'
import rules from './valid/valid'
import menuConfig from '../../config/menu'
import { createRoute, createInfoRouter } from '../../config/utils/createRoute'
import { onMounted, onUnmounted } from '@vue/runtime-core'

let state = reactive({
  number: localCache.get('number') || '',
  passwd: localCache.get('passwd') || '',
  memary: true,
  code: '',
  vercode: '',
  isLoading: true,
})

// 验证码
function code() {
  state.isLoading = true
  getCode().then((res) => {
    if (res.code === 200) {
      let { verifyCode } = res.data
      state.vercode = verifyCode
      state.isLoading = false
    }
  })
}
code()

let loading = ref(false)

let formEl = ref(null)

const router = useRouter()
// 处理登录
function handleBtnClick(formEl) {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (!valid) return

    if (state.code !== state.vercode) {
      ElMessage.error('验证码错误')
      code()
      return
    }

    loading.value = true

    let res = await logOn({ number: state.number, passwd: state.passwd })

    if (res.code !== 200) {
      loading.value = false
      ElMessage.error('密码错误')
      code()
      return
    }

    loading.value = false
    ElMessage.success('欢迎回来')
    // 储存数据
    state.memary ? localCache.set('passwd', '123456') : localCache.remove('passwd')
    state.memary ? localCache.set('number', state.number) : localCache.remove('number')

    // 根据roleId生成navMenu和infoMenu
    let { roleId } = res.data.originalUserDB
    let config = menuConfig[roleId]

    localCache.set('profile', res.data)
    localCache.set('roleId', roleId)
    localCache.set('navMenu', config.navMenu)
    localCache.set('infoMenu', config.infoMenu)

    // 生成路由
    createRoute(config)
    // 生成info路由
    createInfoRouter(config)
  })
}

function handleEnterClick(e) {
  e.keyCode === 13 ? handleBtnClick(formEl.value) : ''
}
onMounted(() => {
  // 监听回车事件
  document.addEventListener('keydown', handleEnterClick)
})

function handleVerCodeClick() {
  code()
}

onUnmounted(() => {
  // 卸载回车事件
  document.removeEventListener('keydown', handleEnterClick)
})
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.login {
  width: 100vw;
  height: 100vh;
  background-color: #293146;
  overflow: hidden;
  .login-top {
    display: flex;
    height: 30px;
    width: 100%;
    padding: 0 30px;
    margin-top: 10px;
    justify-content: space-between;
    align-items: flex-start;
    .login-top-left {
      color: #fff;
      font-family: auto;
      letter-spacing: 2px;
    }
  }
  .login-panel {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-width: 326px;
    height: calc(100vh - 40px);
    .login-pane-card {
      width: 480px;
      height: 400px;
      h2 {
        text-align: center;
      }
    }
  }
}
.el-form {
  padding: 0 15px;
  .el-form-item {
    margin: 15px 0;
    width: 100%;
    .el-input {
      width: 100%;
    }
  }
  .code {
    .el-input {
      width: 60%;
    }
  }
  .control {
    margin: 0;
  }
  .el-form-item__content {
    display: flex;
    justify-content: space-between;
    margin: 0;
  }
  .logon button {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  .login .login-panel .login-pane-card {
    width: 400px;
    height: 320px;
  }
  .el-form .el-form-item {
    margin: 7px 0;
  }
}
</style>
