<template>
  <Navigation type="user"></Navigation>
  <div>
    <Hero>
      <Title size="1" weight="bold" color="primary">
        Add new trip
      </Title>
    </Hero>
    <Section>
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="w-full lg:w-3/5 py-4 px-6 m-auto">
            <Button v-on:click="login()">Login</Button>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Section from '../../components/molecules/Section.vue'
import Button from '../../components/atoms/Forms/Button.vue'
import Title from '../../components/atoms/Title.vue'
import Hero from '../../components/molecules/Hero.vue'
import Navigation from '../../components/molecules/Navigation.vue'


function login() {
  window.location.href = "http://127.0.0.1:5000/api/user/login";
}

</script>

<style scoped>
ul li:last-child {
  border-bottom: none;
}

.trip-segment-container > ul {
  border: 0 none;
  margin: 0;
  width: 100%;
  padding-left: 40px;
  position: relative;
}

.trip-segment-container > ul::before {
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

.backdrop {
  background-color: rgba(0,0,0,0.5);
}

@media (min-width: 640px) {
  .container {
    max-width: 100% !important;
  }
}
</style>
