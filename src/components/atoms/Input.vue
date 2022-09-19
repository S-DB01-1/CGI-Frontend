<template>
  <input type="text"
         :class="{
            'block px-3 py-1 w-100 text-lg font-source-sans-pro font-medium': true,
            'bg-white border-2 border-background': status === 'default',
            'border-0 border-b-2 border-info': status === 'bordered',
            'border border-red-500': status === 'error'
         }"
         :placeholder="placeholder"
         :name="name">
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  status: {
    type: String,
    default: "default"
  },
  placeholder: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    required: true,
  }
});
</script>

<style scoped>

</style>
