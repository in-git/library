<template>
  <a-layout class="h-[100vh]">
    <a-layout-header>页面标题</a-layout-header>
    <a-layout-content class="relative">
      <RouterView />
    </a-layout-content>
    <a-layout-footer>
      <div class="text-center">
        <span class="text-center">页面底部</span>
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.ant-layout-header {
  color: white;
}
</style>
