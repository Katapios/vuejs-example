<template>
  <div class="navbar">
    <div>vue -3</div>
    <div class="navbar__btns">
      <app-button style="margin-right: 10px" @click="$router.push('/')">todos</app-button>
      <app-button style="margin-right: 10px" @click="$router.push('/about')">about</app-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-navbar'
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: white;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.navbar__btns {
  margin-left: auto;
}
</style>
