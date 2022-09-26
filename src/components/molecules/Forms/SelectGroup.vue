<template>
  <div class="mb-3">
    <Label>{{ label }}</Label>
    <SelectBox :name="name" :items="items"></SelectBox>
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
});
</script>

<style scoped>

</style>
