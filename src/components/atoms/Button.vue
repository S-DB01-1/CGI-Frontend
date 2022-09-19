<template>
  <button :class="{
      'font-source-sans-pro rounded-full font-medium': true,
      'bg-secondary text-white': theme === 'default',
      'bg-white text-black': theme === 'white',

      'px-10 py-2 text-lg' : size === 'default',
      'px-4 py-1 font-xs' : size === 'small',
      'px-14 py-3 font-xl' : size === 'large'
    }">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  theme: {
    type: String,
    default: "default"
  },
  size: {
    type: String,
    default: 'default'
  }
});
</script>

<style scoped>

</style>
