<template>
  <div class="mb-3">
    <Label>{{ label }}</Label>
    <Input :type="type" :id="name" :status="status" :placeholder="placeholder" :name="name" :required="required"></Input>
  </div>
</template>

<script setup>
import Label from "../../atoms/Forms/Label.vue";
import Input from "../../atoms/Forms/Input.vue";
import { defineProps } from 'vue';

defineProps({
  label: {
    type: String,
    default: "default"
  },
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
