<template>
  <div class="login-control">
    <el-button @click="goLogin" class="login-btn">登录</el-button>
  </div>
</template>

<script lang="ts" setup>
// import { useRouter } from 'vue-router'
// import { useStore } from '../../../store/index'

// const router = useRouter()
// const store = useStore()

//  弹出登录
const goLogin = () => {}
</script>

<style lang="scss" scoped>
.login-control {
  .login-btn {
    background-color: var(--blue_color);
    color: var(--main_text_color);
    border: none;
  }
}
</style>
