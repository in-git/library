<template>
  <ConfigProvider :locale="zh_CN">
    <Home />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue';
import zh_CN from 'ant-design-vue/es/locale/zh_CN';
import Home from './views/layout/home/Home.vue';
</script>

<style lang="scss" scoped></style>
