<template>
  <input :type="type"
         :class="{
            'px-3 py-1 w-full text-lg font-source-sans-pro font-medium': true,
            'bg-white border-2 border-background': status === 'default',
            'border-0 border-b-2 border-info': status === 'bordered',
            'border border-red-500': status === 'error'
         }"
         :placeholder="placeholder"
         :name="name" :id="name" :required="required">
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
  },
  type: {
    type: String,
    required: true,
    default: 'text'
  },
  required: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>

</style>
