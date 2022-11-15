<template>
  <div class="hero bg-background container py-16 md:py-0 lg:py-0">
    <div class="flex flex-col md:flex-row w-full">
      <div class="w-full lg:w-1/2 m-auto text-center py-20">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Title from '../atoms/Title.vue'
</script>

<style>

.hero-banner > .hero-image::before {
  content: '';
  position: absolute !important;
  display: inline-block;
  width: 117px;
  height: 117px;
  left: 0;
  bottom: 0;
  background-color: #efefef;
  z-index: 15;
}

.hero-banner > .hero-image::after {
  content: '';
  position: absolute !important;
  display: inline-block;
  width: 195px;
  height: 195px;
  left: 0;
  bottom: 0;
  z-index: 10;
  background: -webkit-gradient(linear,left bottom,left top,from(#5236ab),to(#e41937));
  background: linear-gradient(360deg,#5236ab 0%,#e41937 100%);
}
</style>
