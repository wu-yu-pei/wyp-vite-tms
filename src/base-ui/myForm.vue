<template>
  <div class="my-form">
    <el-form :model="formDate">
      <template v-for="item in config" :key="item">
        <el-form-item
          v-if="item.roleId"
          v-isStudent="item.roleId"
          :label="item.label"
          style="width: 350px"
        >
          <template v-if="item.type == 'select'">
            <el-select
              v-model="formDate[item.field]"
              :placeholder="item.placeholder"
              :style="{ width: item.width }"
            >
              <el-option
                v-for="optionItem in item.options"
                :key="optionItem.label"
                :label="optionItem.label"
                :value="optionItem.value"
              ></el-option>
            </el-select>
          </template>
          <template v-else-if="item.type === 'checkBox'">
            <el-checkbox-group v-model="formDate[item.field]">
              <el-checkbox
                v-for="checkboxItem in item.checkboxs"
                :key="checkboxItem.label"
                :label="checkboxItem.label"
              />
            </el-checkbox-group>
          </template>
          <template v-else>
            <el-input
              v-model="formDate[item.field]"
              :type="item.type"
              :placeholder="item.placeholder"
              :style="{ width: item.width }"
            ></el-input>
          </template>
        </el-form-item>
        <el-form-item v-else :label="item.label" style="width: 350px">
          <template v-if="item.type == 'select'">
            <el-select
              v-model="formDate[item.field]"
              :placeholder="item.placeholder"
              :style="{ width: item.width }"
            >
              <el-option
                v-for="optionItem in item.options"
                :key="optionItem.label"
                :label="optionItem.label"
                :value="optionItem.value"
              ></el-option>
            </el-select>
          </template>
          <template v-else>
            <el-input
              v-model="formDate[item.field]"
              :type="item.type"
              :placeholder="item.placeholder"
              :style="{ width: item.width }"
            ></el-input>
          </template>
        </el-form-item>
      </template>
    </el-form>
    <div class="control">
      <slot name="control"></slot>
    </div>
  </div>
</template>
<script setup>
defineProps({
  formDate: {
    type: Object,
    required: true,
  },
  config: {
    type: Array,
    required: true,
  },
})
</script>

<style scoped lang="less">
.control {
  margin: 10px 0;
  text-align: right;
}
.my-form {
  .el-form {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
