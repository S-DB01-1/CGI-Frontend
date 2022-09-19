<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <div class="accordion-container">
        <div class="accordion">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.accordion-container > .accordion {
  border: 0 none;
  margin: 0;
  width: 100%;
  padding-left: 40px;
  position: relative;
}

.accordion-container > .accordion::before {
  content: "";
  display: inline-block;
  width: 8px;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background: -webkit-gradient(linear,left bottom,left top,color-stop(0,#5236ab),to(#e41937));
  background: linear-gradient(360deg,#5236ab 0,#e41937 100%);
}
</style>
