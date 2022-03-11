<template>
  <div class="ver-code" :style="{ width, height, lineHeight: height }" @click="() => emit('click')">
    <template v-if="loading">
      <div class="ver-loading">
        <span>·</span>
        <span>·</span>
        <span>·</span>
      </div>
    </template>
    <template v-else v-for="(item, index) in word" :key="index">
      <div :style="{ transform: `rotate(${Math.random() * 100}deg)` }">
        {{ item }}
      </div>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: '200px',
  },
  height: {
    type: String,
    default: '100%',
  },
  word: {
    type: String,
    default: 'null',
  },
  loading: {
    type: Boolean,
    defaule: false,
  },
})
const emit = defineEmits(['click'])
console.log(3)
</script>

<style scoped lang="less">
.ver-code {
  user-select: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-size: 24px;
  border: 1px solid #ccc;
  // color: #fff;
  border-radius: 5px;
  background: linear-gradient(
    176deg,
    transparent 5px,
    #293146 5px,
    #293146 6px,
    transparent 6px,
    transparent 16px,
    blue 16px,
    blue 17px,
    transparent 17px,
    transparent 27px,
    #293146 27px,
    #293146 28px,
    transparent 28px,
    transparent 38px,
    blue 38px,
    blue 39px,
    transparent 39px,
    transparent 40px
  );
  .ver-loading {
    width: 100%;
    height: 100%;
    font-size: 50px;
    line-height: 40px;
    display: flex;
    justify-content: center;
    background-color: #fff;
    span {
      display: block;
      width: 100%;
      height: 10px;
      margin: 0 15px;
      color: #409eff;
    }
    span:nth-child(1) {
      animation: move 0.5s 0s linear infinite alternate;
    }
    span:nth-child(2) {
      animation: move 0.5s -0.5s linear infinite alternate;
    }
    span:nth-child(3) {
      animation: move 0.5s -1s linear infinite alternate;
    }
    @keyframes move {
      0% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(10px);
      }
    }
  }
  div {
    flex: 1;
  }
}
</style>
