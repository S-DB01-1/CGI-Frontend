<template>
  <div class="mb-3">
    <Label>{{ label }}</Label>
    <SelectBox :name="name" :items="items" :model="model"></SelectBox>
  </div>
</template>

<script setup lang="ts">
import Label from "../../atoms/Forms/Label.vue";
import SelectBox from "@/components/atoms/Forms/SelectBox.vue";
import { defineProps } from 'vue';

defineProps({
  label: {
    type: String,
    default: "default"
  },
  name: {
    type: String,
    required: true,
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
