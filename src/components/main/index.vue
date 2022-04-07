<template>
  <div class="main">
    <header class="header animate__animated animate__backInRight">
      <loginBtn></loginBtn>
      <Register></Register>
    </header>
    <el-divider />

    <aside class="aside animate__animated animate__bounce">
      欢迎来到我的空间
    </aside>
    <el-divider />

    <footer class="footer">底部详情</footer>
  </div>
</template>

<script lang="ts" setup>
import loginBtn from './component/loginBtn.vue'
import Register from './component/register.vue'
</script>

<style lang="scss" scoped>
.main {
  background-color: var(--bg_color);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  .header {
    height: 10%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .aside {
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    letter-spacing: 30px;
    color: var(--blue_color);
  }

  .footer {
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    letter-spacing: 30px;
    color: var(--blue_color);
  }
}
</style>
