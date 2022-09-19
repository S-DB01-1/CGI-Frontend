<template>
  <div :class="{
            'font-normal': weight === 'normal',
            'font-bold': weight === 'bold',

            'text-black' : color === 'black',
            'text-primary' : color === 'primary',
         }">
      <h1 v-if="size === '1'" class="text-4xl">
        <slot />
      </h1>
      <h2 v-else-if="size === '2'" class="text-3xl">
        <slot />
      </h2>
      <h3 v-else-if="size === '3'" class="text-2xl">
        <slot />
      </h3>
      <h4 v-else-if="size === '4'" class="text-xl">
        <slot />
      </h4>
      <h5 v-else-if="size === '5'" class="text-lg">
        <slot />
      </h5>
      <h6 v-else-if="size === '6'" class="text-base">
        <slot />
      </h6>
  </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  size: {
    type: String,
    default: "1"
  },
  weight: {
    type: String,
    default: 'normal',
  },
  color: {
    type: String,
    default: 'black',
  }
});
</script>

<style scoped>

</style>
