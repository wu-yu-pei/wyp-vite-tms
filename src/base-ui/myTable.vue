<template>
  <div class="my-table">
    <el-table :data="tableDate" style="width: 100%" max-height="250">
      <template v-for="item in config" :key="item.prop">
        <el-table-column
          :fixed="item.fixed === 'true' ? true : item.fixed"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        />
      </template>
      <!-- <el-table-column fixed="right" label="Operations" width="120">
        <template #default="scope">
          <el-button type="text" size="small" @click.prevent="deleteRow(scope.$index)">
            Remove
          </el-button>
        </template>
      </el-table-column> -->
    </el-table>
  </div>
</template>

<script setup>
defineProps({
  tableDate: {
    type: Array,
    required: true,
  },
  config: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="less">
.my-table {
  margin-top: 20px;
}
</style>
