<template>
  <div class="pdf">
    <template v-if="!pageNum">
      <div class="loading">加载中...</div>
    </template>
    <template v-for="item in pageNum" :key="item">
      <div class="item" :data-index="item">
        <canvas
          :id="`pdf-canvas-${item}`"
          class="pdf-page"
          :style="{ width: '100%', height: '700px' }"
        />
      </div>
    </template>
  </div>
</template>
<script>
import { reactive, toRefs, nextTick } from 'vue'
import * as PDF from 'pdfjs-dist'
PDF.GlobalWorkerOptions.workerSrc = '/pdf.worker.js'
export default {
  name: 'DisplayPdf',
  props: {
    url: {
      type: String,
      default: '',
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      pageNum: null,
      pdfCtx: null,
    })

    const resolvePdf = (url) => {
      // 该实例具有由文档对象promise解析的属性。
      const loadingTask = PDF.getDocument(url)
      loadingTask.promise.then((pdf) => {
        state.pdfCtx = pdf
        // 只渲染两页
        state.pageNum = pdf.numPages
        console.log(state.pageNum)
        nextTick(() => {
          renderPdf()
        })
      })
    }

    resolvePdf(props.url)

    const renderPdf = (num = 1) => {
      state.pdfCtx.getPage(num).then((page) => {
        const canvas = document.getElementById(`pdf-canvas-${num}`)
        canvas.setAttribute('data-index', num)
        const ctx = canvas.getContext('2d')
        const viewport = page.getViewport({ scale: 1 })
        // 画布大小,默认值是width:300px,height:150px
        canvas.height = viewport.height
        canvas.width = viewport.width
        // 画布的dom大小, 设置移动端,宽度设置铺满整个屏幕
        // const clientWidth = document.body.clientWidth
        canvas.style.width = 500 + 'px'
        // // 根据pdf每页的宽高比例设置canvas的高度
        // canvas.style.height = clientWidth * (viewport.height / viewport.width) + 'px'
        page.render({
          canvasContext: ctx,
          viewport,
        })
        if (num < state.pageNum) {
          renderPdf(num + 1)
        } else {
          console.log('onRendered')
        }
      })
    }
    return {
      ...toRefs(state),
    }
  },
}
</script>

<style scoped lang="less">
.pdf {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
  canvas {
    position: relative;
    border: 1px solid #0960bd;
    margin: 15px;
    background: url(../assets/images/loading.png) no-repeat center center;
    background-color: #fff;
  }
  .loading {
    text-align: center;
    line-height: 630px;
    font-size: 24px;
    letter-spacing: 8px;
    width: 100%;
    height: 100%;
  }
}
.item {
  position: relative;
}
.item::after {
  position: absolute;
  content: attr(data-index);
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  color: #fff;
  text-align: center;
  line-height: 30px;
  background-color: #000;
}
</style>
