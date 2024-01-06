<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="main" style="margin-bottom: 200px;">
    <router-view></router-view>
  </div>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style lang="scss" scoped>
@media screen and (min-width: 768px) {
  .main {
    width: 750px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 992px) {
  .main {
    width: 970px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1200px) {
  .main {
    width: 1200px;
    margin: 0 auto;
  }
}
.m {
  transition: transform 0.5s;
}
.main {
  min-width: 750px;
  margin: 0 auto;
}
</style>
