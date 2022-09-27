<template>
  <select :id="name" class="px-3 py-1 w-full text-lg font-source-sans-pro font-medium bg-white border-2 border-background">
<!--    <option v-for="(item, index) in items" v-bind:key="index">{{ item }}</option>-->
    <option value="Auto" selected>Auto</option>
    <option value="Fiets">Fiets</option>
    <option value="Lopen">Lopen</option>
  </select>
</template>

<script setup lang="ts">
import {defineProps} from 'vue';
defineProps({
  name: {
    type: String,
    required: true
  },
  items: {
    type: [],
  },
  model: {
    type: String
  }
});
</script>

<style scoped>

</style>
