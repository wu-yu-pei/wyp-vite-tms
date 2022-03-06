<template>
  <div class="setting">
    <my-form :formDate="data" :config="config">
      <template #control>
        <el-button @click="changePassword">修改</el-button>
      </template>
    </my-form>
  </div>
</template>

<script setup>
import { changeUserPassword } from '../../../../service/main/page/setting'
import LocalCache from '../../../../utils/localCache'

let uid = LocalCache.get('number')

let data = reactive({
  newPasswd: '',
  oldPasswd: '',
  reOldPasswd: '',
})
let config = ref([
  {
    label: '旧密码',
    field: 'oldPasswd',
    placeholder: '请输入旧密码',
    type: 'password',
    width: '300px',
  },
  {
    label: '新密码',
    field: 'newPasswd',
    placeholder: '请输入新密码',
    type: 'password',
    width: '300px',
    options: [],
  },
  {
    label: '重复新密码',
    field: 'reOldPasswd',
    placeholder: '请输入新密码',
    type: 'password',
    width: '300px',
  },
])

function changePassword() {
  data.newPasswd !== data.reOldPasswd
    ? ElMessage.error('两次密码不一致')
    : changeUserPassword({ uid, newPasswd: data.newPasswd, oldPasswd: data.oldPasswd }).then(
        (res) => {
          ElMessage.success('修改成功')
        }
      )
}
</script>

<style scoped lang="less">
.setting {
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;
}
</style>
