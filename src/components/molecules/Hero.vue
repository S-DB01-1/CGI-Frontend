<template>
  <div class="hero bg-background container py-16 md:py-0 lg:py-0">
    <div class="flex flex-col md:flex-row w-full">
      <div class="w-full lg:w-1/2 m-auto text-center md:text-left lg:text-left">
        <slot />
      </div>
      <div class="w-full lg:w-1/2 m-auto">
        <div class="hidden md:block lg:block hero-banner flex justify-end">
          <div id="hero-image">
          </div>
            <img class="hero-image" src="https://www.telegraph.co.uk/content/dam/health-fitness/spark/centrum/man-riding-bike-in-suit-xlarge.jpg" alt="Happy man riding on bike">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from '../atoms/Title.vue'
</script>

<style>
.hero-image {
  height: auto;
  width: 75%;
}

.hero-banner > #hero-image::before {
  content: "";
  position: absolute !important;
  display: inline-block;
  width: 60px;
  height: 60px;
  background-color: #efefef;
  z-index: 15;
}

.hero-banner > #hero-image::after {
  content: "";
  position: absolute !important;
  display: inline-block;
  width: 100px;
  height: 100px;
  z-index: 10;
  background: -webkit-gradient(linear,left bottom,left top,from(#5236ab),to(#e41937));
  background: linear-gradient(360deg,#5236ab 0%,#e41937 100%);
}
</style>
