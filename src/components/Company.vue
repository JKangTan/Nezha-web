<script setup>
import { ref, onMounted, computed } from 'vue'
import { companyIntroduce } from '../config/home'

const props = defineProps({
  data: {
    type: Array,
    default: () => ['数据准备', '数据处理', '数据可视化', '分享写作']
  }
})

let current = ref('全部')
const companyAddr = [
  { title: '公司地址:', content: '上海市静安区汉中路158号汉中广场801室' },
  { title: '微信:', content: '18621099012' },
  { title: 'QQ:', content: '2815733492' },
  { title: '邮箱:', content: '2815733492@qq.com' }
]
const companyWorkTime = [
  { title: '工作时间:', content: '周一到周五9:00 - 18:00' },
  { title: '联系电话:', content: '13611949333 夏经理' }
]

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
  <h1 class="nav">公司介绍</h1>
  <div class="company-info">
    <p>{{ companyIntroduce }}</p>
    <a-image
      width="60%"
      :preview="false"
      :src="`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?0`"
    />
  </div>
  <h1 class="nav">公司地址</h1>
  <div class="company-info">
    <div class="company-addr" />
    <div class="company-info">
      <div class="left">
        <div v-for="addr in companyAddr">
          <div style="color: #666;font-size: 15px;">{{ addr['title'] }}</div>
          <div style="color: #111;font-size: 16px;margin-top: 5px;font-weight: 500;">{{ addr['content'] }}</div>
        </div>
      </div>
      <div class="right">
        <div v-for="addr in companyWorkTime">
          <div style="color: #666;font-size: 15px;">{{ addr['title'] }}</div>
          <div style="color: #111;font-size: 16px;margin-top: 5px;font-weight: 500;">{{ addr['content'] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  width: 100%;
  padding: 10px 0px;
  background-color: #fff;
  color: #333;
  font-size: 30px;
  font-weight: bold;
  padding-top: 20px;
}
.company-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 100%;
  p {
    font-size: 14px;
    color: #333;
    padding: 10px;
    text-indent: 20px;
    line-height: 1.7;
  }
  .company-addr {
    background: center / cover no-repeat url('@/assets/company-addr.png');
    width: 100%;
    height: 360px;
  }

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 0;
  }
}
</style>
