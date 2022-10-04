<template>
    <tr class="bg-white border-b">
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ distance }} Km</td>
        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{{ vehicleName }}</td>
      </tr>
</template>

<script setup lang="ts">
    import { defineProps } from 'vue';
    
    defineProps({
    distance: {
        type: Number,
        required: true
      },
    vehicleName: {
        type: String,
        required: true
      }
    });
</script>
    
<style scoped>
    th {
      width: 33%;
    }
</style>