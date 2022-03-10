<template>
  <div>
    <el-upload
      ref="uploadEl"
      class="upload-demo"
      :action="action + '/manangmentSystem/user/updateHeadImage'"
      name="fileName"
      :data="data"
      limit="1"
      :show-file-list="false"
      @success="handleSuccess"
      @error="handleSError"
    >
      <el-icon size="14px"> <UploadFilled></UploadFilled></el-icon>修改图像
    </el-upload>
  </div>
</template>

<script setup>
import LocalCache from '../utils/localCache'
import { reactive } from '@vue/reactivity'

let { uid } = LocalCache.get('profile').originalUserDB

let action = ref(import.meta.env.VITE_APP_BASE_URL)

let uploadEl = ref(null)

let data = reactive({
  uid: uid,
})

let emit = defineEmits(['uploadSuccess'])

function handleSuccess(res) {
  if (res.code !== 200) {
    ElMessage.error(res.msg)
    return
  }
  emit('uploadSuccess')
  uploadEl.value.clearFiles()
}
</script>

<style>
.el-upload {
  padding: 0;
}
</style>
