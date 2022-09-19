<template>
  <div class="accordion-item">
    <div class="accordion-title py-3 px-5 bg-background-light mb-3 cursor-point" @click="open">
      <div class="flex flex-wrap items-center justify-between -m-2">
        <div class="w-auto p-2">
          <p class="font-heading font-semibold text-lg text-primary">
            {{ title }}
          </p>
        </div>
        <div class="w-auto p-2">
          <i class="fas text-secondary" :class="{ 'fa-minus': isOpen, 'fa-plus': !isOpen }"></i>
        </div>
      </div>
    </div>
      <div class="accordion-text py-3 px-5 mb-3" :class="{ 'block shake': isOpen, 'hidden': !isOpen }">
        <slot />
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';

defineProps({
  title: {
    type: String,
    required: true
  }
});

let isOpen = ref(false);
const open = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>

</style>
