<template>
  <div class="p-12">
    <div class="list flex" id="parent">
      <div>
        <div
          v-for="(item, key) in list"
          :key="key"
          class="item relative"
          :id="item.id"
          :class="{ active: hasEl(item.id) }"
        >
          <span>{{ item.id }}</span>
          <div class="dot right-6 absolute bg-pink-400" :id="`dot-${item.id}`"></div>
        </div>
      </div>
      <div>
        <div
          v-for="(item, key) in targetList"
          :key="key"
          class="item relative text-right"
          :id="item.id"
          :class="{ active: hasEl(item.id) }"
        >
          <span>{{ item.id }}</span>
          <div class="dot left-6 absolute bg-pink-400" :id="`dot-${item.id}`"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { list, nodeList, targetList } from './data/data';
import { drawLine, hasEl } from './data/action';
import { draw } from './data/svg';
import { SVG } from '@svgdotjs/svg.js';
import { onMounted } from 'vue';

onMounted(() => {
  draw.value = SVG().addTo('#svg-container').size(innerWidth, innerHeight);
  drawLine();
});
</script>

<style lang="scss" scoped>
.list {
  gap: 64px;
  .item {
    padding: 4px;
    width: 300px;
    margin-bottom: 4px;
    border: 1px solid #000;
  }
  .dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
.active {
  background-color: var(--primary);
  color: white;
}
</style>
