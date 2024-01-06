<script setup>
import { ref, onMounted } from 'vue'
import * as config from '../config/home.js'
import DataProcess from '@/components/DataProcess.vue'
import CountryList from '@/components/CountryList.vue'
import Company from '@/components/Company.vue'

const baseUrl =
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/'

const getImgUrl = (i) => {
  return `${baseUrl}abstract0${i + 1}.jpg`
}
const url = ref('src/assets/national.jpg')
const countrys = ['欧洲签证', '美洲签证', '亚洲签证', '大洋洲签证', '非洲签证']
let activeContry = ref('欧洲签证')
onMounted(() => {})

const scrollPage = title => {}
</script>

<template>
  <div class="nav-bar">
    <div class="company-icon"></div>
    <div class="company-service">
      <button v-for="title in config.navTitles" :key="title" class="nav-button" @click="scrollPage(title)">{{ title }}</button>
    </div>
  </div>
  <a-carousel autoplay>
    <div v-for="item in 4" :key="item" style="">
      <div :style="getImgUrl(item - 1)" />
    </div>
  </a-carousel>
  <div class="user-increse">
    <div class="thanks-box">
      <h4>感谢您的信任</h4>
      <h2>我们已为数万人提供签证预约服务，您的信任是我们宝贵的财富。</h2>
      <button>联系我们</button>
    </div>
    <div>这是动画</div>
  </div>
  <div class="data-visible-process">
    <h2>FineBI数据可视化全流程</h2>
    <p>提供全链路、全场景、多终端的数据可视化解决方案</p>
    <data-process />
  </div>
  <div class="supported-country">
    <div class="country-title">
      <span class="rect-icon" style="opacity: 0.6" />
      <span class="rect-icon" style="opacity: 1" />
      <h2>全球签证办理</h2>
      <span class="rect-icon" style="opacity: 1" />
      <span class="rect-icon" style="opacity: 0.6" />
    </div>
    <p>出国签证办理</p>
    <ul class="countrys-block">
      <li
        v-for="c in Object.keys(config.visaConfig)"
        :class="[activeContry === c ? 'country-active' : 'country']"
        @click="activeContry = c"
      >
        {{ c }}
      </li>
    </ul>
    <div class="nationl-block">
      <li v-for="item in config.visaConfig[activeContry]" class="nationl-box">
        <img
          :src="url"
          :title="item['zh']"
          :alt="item['zh']"
          style="transition: all 1s ease 0s; opacity: 1"
        />
        <span>
          <div style="font-size: 15px; color: #333; font-weight: 500">{{ item['zh'] }}</div>
          <div style="font-size: 13px; color: #666; font-weight: 500">{{ item['en'] }}</div>
        </span>
      </li>
    </div>
    <div style="height: 40px; width: 100%; background-color: #eee" />
    <country-list />
    <company />
  </div>
</template>

<style lang="scss" scoped>
.supported-country {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e6eff2;
  .country-title {
    display: flex;
    align-items: center;
    margin-top: 15px;
    h2 {
      font-size: 36px;
      font-weight: 600;
      text-align: center;
      color: #274196;
      margin: 0 10px;
    }
    .rect-icon {
      display: inline-block;
      width: 14px;
      height: 14px;
      margin: 0 2px;
      background-color: #274196;
      clip-path: polygon(0 50%, 50% 0, 100% 50%, 100% 50%, 50% 100%);
    }
  }
  p {
    font-size: 20px;
    color: #666;
  }
  .countrys-block {
    width: 100%;
    position: relative;
    height: 50px;
    white-space: nowrap;
    border-bottom: 1px solid #333;
    transition: all 0.2s;
    background: #f3f4f6;
    line-height: 40px;
    overflow: visible;
    text-align: center;
    margin-top: 10px;
    cursor: pointer;

    .country {
      font-size: 16px;
      color: #666;
      padding: 5px 25px 10px;
      display: inline-block;
    }
    .country-active {
      display: inline-block;
      font-size: 16px;
      padding: 5px 20px 10px;
      color: #fff;
      background: #003670;
      position: relative;
      cursor: pointer;

      &::before {
        display: block;
        position: absolute;
        left: 50%;
        bottom: -2px;
        margin-left: -8px;
        content: '';
        width: 15px;
        height: 15px;
        background: #003670;
        transform: rotate(45deg);
      }
      &::after {
        content: '';
        height: 50px;
        background: #003670;
        z-index: -1;
      }
    }
  }
  .nationl-block {
    display: flex;
    background: #fff;
    width: 100%;
    padding: 30px 15px;
    .nationl-box {
      display: flex;
      margin-right: 40px;
      cursor: pointer;

      span {
        padding: 0 10px;
        display: inline-block;
        vertical-align: middle;
      }
    }
    .flag {
      background-color: #274196;
      width: 120px;
      height: 50px;
      margin-right: 20px;
    }
  }
}
.read-the-docs {
  color: #888;
}
.flex-container {
  display: flex;
  padding: 30px 0px;
  justify-content: space-between;
  align-items: center;
}
.nav-bar {
  display: flex;
  padding: 30px 0px;
  justify-content: space-between;
  align-items: center;

  .company-icon {
    background: center / cover no-repeat url('@/assets/icon-company.png');
    // background-color: red;
    width: 60px;
    height: 60px;
  }
  .company-service {
    border: 1px #333 solid;
    padding: 10px 10px;
    display: flex;
    .nav-button {
      font-size: 16px;
      color: #333;
      margin: 0 15px;
      background-color: #fff;

      &:hover {
        color: #fff;
        margin: 0 15px;
        background-color: #364d79;
      }
    }
  }
}
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 300px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}

.user-increse {
  display: flex;
  align-items: center;
  margin: 30px 0 30px 0px;

  .thanks-box {
    background-color: #fff1cf;
    padding: 30px 20px;
    width: 50%;

    h4 {
      color: #ff6700;
      font-size: 14px;
      font-weight: bold;
    }

    h2 {
      color: #333;
      font-size: 18px;
      word-wrap: break-word;
      font-weight: 600;
      margin: 10px 0 15px 0;
    }

    button {
      border: 1px #333 solid;
      padding: 5px 10px;
      font-size: 14px;
      border-radius: 0;
      background: transparent;
      font-weight: 500;
    }
  }
}
.data-visible-process {
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: 44px;
    font-weight: 600;
    text-align: center;
    color: #2f364c;
  }
  p {
    font-size: 16px;
    margin: 20px 0 10px 0;
    color: #2f364c;
    line-height: 24px;
  }
}
</style>
