<template>
  <main class="page flex flex-col min-h-screen">
    <header class="bg-purple-200 h-16 leading-16 text-center">
      {{ route?.name }}
    </header>
    <article class="content flex items-baseline flex-1">
      <section class="bg-sky-500 aspect-video w-1/4"></section>
      <section class="bg-pink-200 aspect-square w-1/4"></section>
    </article>
    <footer class="bg-purple-200 h-16 leading-16 text-center">
      copy right
    </footer>
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "@/utils/vue-router";

const route = useRoute();
</script>

<style lang="less" scoped>
.page {
  background-color: var(--vt-c-white-mute);
  .content {
    section + section {
      margin: 16px;
    }
  }
}
</style>
