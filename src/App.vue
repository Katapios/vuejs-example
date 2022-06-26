<template>
<app-navbar></app-navbar>
  <div class="app">
<router-view></router-view>
  </div>
</template>

<script>

import AppNavbar from '@/components/UI/AppNavbar'

export default {
  components: {
    AppNavbar
  }
}
</script>

<style>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 10px;
}
</style>
