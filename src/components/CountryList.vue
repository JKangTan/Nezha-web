<script setup>
import { ref, onMounted, computed } from 'vue'
import { allCountrys } from '../config/home'

const props = defineProps({
  data: {
    type: Array,
    default: () => ['数据准备', '数据处理', '数据可视化', '分享写作']
  }
})

let current = ref('全部')

const countrys = [[{ c: '其他国家加急' }]]

const enterElement = (title) => {
  current.value = title
}
const leaveElement = (title) => {
  // current.value = title;
}
const urgentList = (countrys) => {
  if (current.value === '全部') {
    return countrys
  }
  return countrys.filter((e) => e['urgent'])
}
</script>

<template>
  <div class="nav">
    <span :class="[current == '全部' ? 'tab-active' : 'button']" @click="current = '全部'"
      >全部</span
    >
    <span :class="[current == '加急签证' ? 'tab-active' : 'button']" @click="current = '加急签证'"
      >加急签证</span
    >
  </div>
  <div class="country-list">
    <template v-for="clist in allCountrys">
      <div v-for="c in urgentList(clist)" :key="c['en']" class="country-item">
        <a-image
          width="100%"
          :preview="false"
          :src="`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?0`"
        />
        <h2>{{ c['zh'] }}</h2>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  width: 100%;
  padding: 10px 15px;
  background-color: #fff;
  span {
    display: inline-block;
  }

  .button {
    font-size: 16px;
    color: #666;
    margin-right: 20px;
    background-color: #fff;
    border: 0;
    padding: 8px 15px 5px;
  }

  .tab-active {
    font-size: 16px;
    margin-right: 20px;
    background-color: #eee;
    border-radius: 5px;
    padding: 8px 15px 5px;
    color: #1890ff;
    border: none;
  }
}
.country-list {
  overflow-y: auto;
  max-height: 600px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  padding: 20px 0;
  background-color: #fff;

  &::-webkit-scrollbar {
    display: none;
  }

  .country-item {
    width: 100%;
    background-color: #eee;
  }
  h2 {
    text-align: center;
    margin: 10px 0;
    font-size: 15px;
    color: #333;
  }
}
</style>
