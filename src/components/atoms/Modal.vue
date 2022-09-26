<template>
  <div :id="name" tabindex="-1" aria-hidden="true" :class="{
      'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full backdrop' : true,
      'block': state,
      'hidden': !state,
    }">
    <div class="relative p-4 w-full max-w-4xl h-full md:h-auto">
      <div class="relative bg-white rounded-lg shadow">
        <button @click="$emit('onModalClose', false)" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " :data-modal-toggle="name">
          <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">Sluit popup</span>
        </button>
        <div class="py-6 px-6 lg:px-8">
          <slot />

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from 'vue';
defineProps({
  name: {
    type: String,
    required: true
  },
  state: {
    type: Boolean,
    required: true,
    default: false
  }
});

defineEmits(['state'])
</script>

<style scoped>
.backdrop {
  background-color: rgba(0,0,0,0.5);
}
</style>
