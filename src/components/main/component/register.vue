<template>
  <div class="register-control">
    <el-button @click="goRegister" class="register-btn">注册</el-button>
  </div>
</template>

<script lang="ts" setup>
// 注册
const goRegister = () => {}
</script>

<style lang="scss" scoped>
.register-control {
  .register-btn {
    background-color: var(--blue_color);
    color: var(--main_text_color);
    border: none;
    margin: 0 10px;
  }
}
</style>
