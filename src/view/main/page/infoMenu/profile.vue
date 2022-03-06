<template>
  <div class="user-info">
    <el-descriptions class="margin-top" title="个人信息" :column="3" :size="size" border>
      <template v-for="(value, key, index) in userInfo" :key="index">
        <el-descriptions-item>
          <template #label>
            {{ $global.mapToChinese(key) }}
          </template>
          <template v-if="value">
            {{ value }}
          </template>
          <template v-else> 未知 </template>
        </el-descriptions-item>
      </template>
    </el-descriptions>
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
    ;[
      'username',
      'number',
      'identityCard',
      'phoneNumber',
      'clszz',
      'faculty',
      'title',
      'garde',
      'major',
    ].includes(key) && (userInfo[key] = result[key])
  }
})
</script>

<style scoped lang="less">
.user-info {
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;
}
</style>
