<template>
  <div class="w-full bg-red-500 text-white py-4 overflow-hidden">
    <div class="w-full pl-[100%] bg-transparent ticker-transition">
      <div v-for="item in news" :key="item" class="inline-block py-0 px-2">
        <div>{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes ticker {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-150%, 0, 0);
  }
}

.ticker-transition {
  display: inline-block;
  white-space: nowrap;
  padding-right: 100%;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: ticker;
  animation-duration: 20s;
}
.ticker-transition:hover {
  animation-play-state: paused;
  cursor: pointer;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      news: [
        "11111111111111111111111111111",
        "22222222222222222222222222222",
        "33333333333333333333333333333",
      ],
    };
  },
});
</script>
