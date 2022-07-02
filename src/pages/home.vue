<template>
  <main class="m-4 main text-primary bg-gray-300 text-base py-6 px-4">
    {{ route?.path }}
    <TheWelcome />
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "@/utils/vue-router";

const route = useRoute();
</script>

<style lang="less">
.main {
  background-color: var(--vt-c-white-mute);
}
</style>
