<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
  data: {
    type: Array,
    default: () => ['数据准备', '数据处理', '数据可视化', '分享写作']
  }
})

let current = ref('')

const enterElement = title => {
  current.value = title;
}
const leaveElement = title => {
  // current.value = title;
}

onMounted(() => {

})
</script>

<template>
  <div class="process-box">
    <template v-for="title in data" :key="data">
      <div class="data-box" @mouseenter="enterElement(title)">
        <div :class="[current === title ? 'active' : 'img-box']" />
        <span :class="[current === title ? 'current' : '']">{{ title }}</span>
      </div>
      <span class="data-progress">
        <div class="arrow arrow-0"><em></em></div>
        <div class="arrow arrow-1"><em></em></div>
        <div class="arrow arrow-2"><em></em></div>
        <div class="arrow arrow-3"><em></em></div>
      </span>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.process-box {
  display: flex;
  .img-box {
    height: 80px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .active {
    height: 80px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
  .data-box {
    // width: 120px;
    // height: 120px;
    padding: 20px 10px;
    &:nth-of-type(1) {
      .img-box {
        background-image: url('@/assets/data-button01.png');
      }
      .active {
        background-image: url('@/assets/data-button01-s.png');
      }
    }
    &:nth-of-type(2) {
      .img-box {
        background-image: url('@/assets/data-button02.png');
      }
      .active {
        background-image: url('@/assets/data-button02-s.png');
      }
    }
    &:nth-of-type(3) {
      .img-box {
        background-image: url('@/assets/data-button03.png');
      }
      .active {
        background-image: url('@/assets/data-button03-s.png');
      }
    }
    &:nth-of-type(4) {
      .img-box {
        background-image: url('@/assets/data-button04.png');
      }
      .active {
        background-image: url('@/assets/data-button04-s.png');
      }
    }

    .current {
      color: #0069ea;
    }
    span {
      margin-top: 15px;
      display: block;
      position: relative;
      font-size: 24px;
      font-weight: 400;
      color: #808da1;
      text-align: center;
      white-space: nowrap;
    }
  }
  .data-progress {
    position: relative;
    width: 100px;
    height: 20px;
    &:nth-of-type(4) {
      display: none;
    }
    .arrow {
      position: absolute;
      top: 10%;
      left: 0%;
      transform: translate3d(-50%, -50%, 0);
      transform-origin: 50% 50%;
      opacity: 0;
      margin-top: 55px;

      em {
        width: 12px;
        height: 12px;
        display: inline-block;
        border-left: 3px solid #0069ea;
        border-top: 3px solid #0069ea;
        transform: rotate(-225deg) !important;
      }
    }
    .arrow-0 {
      animation: indedx_design_arrow-move 2.4s ease-in-out infinite;
    }
    .arrow-1 {
      animation: indedx_design_arrow-move 2.4s ease-in-out 0.4s infinite;
    }
    .arrow-2 {
      animation: indedx_design_arrow-move 2.4s ease-in-out 0.8s infinite;
    }
    .arrow-3 {
      animation: indedx_design_arrow-move 2.4s ease-in-out 1.2s infinite;
    }
    @keyframes indedx_design_arrow-move {
      0% {
        transform: translateX(0);
        opacity: 0;
      }

      90% {
        transform: translateX(90px);
        opacity: 1;
      }

      100% {
        transform: translateX(100px);
        opacity: 0;
      }
    }
  }
}
</style>
