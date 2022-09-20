<template>
<table class="w-full mx-auto SegmentTable">
    <thead>
      <tr>
        <th scope="col" class="text-sm font-small text-gray-900 px-6 py-4 text-left">Afstand</th>
        <th scope="col" class="text-sm font-small text-gray-900 px-6 py-4 text-left">Tijd</th>
        <th scope="col" class="text-sm font-small text-gray-900 px-6 py-4 text-left">Vervoersmiddel</th>
      </tr>
    </thead>
    <tbody class="">
      <slot />
    </tbody>
  </table>
</template>

<script setup lang="ts">
    
</script>

<style scoped>
    .SegmentTable
    {
      margin: 10px 0px;
      width: 90%;
    }

    th {
      width: 33%;
    }
</style>
