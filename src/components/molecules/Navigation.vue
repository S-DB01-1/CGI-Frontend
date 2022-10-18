<template>
  <div v-if="type === 'user'">
    <nav class="bg-white border-gray-200 py-5 drop-shadow">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="" class="flex items-center">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300.9 140" xml:space="preserve" class="logo-img fill-secondary" role="img" aria-label="CGI official logo" height="38px"> <g id="Layer_1"> <g> <path class="st0" d="M74.8,27c-27.4,0-44.2,21.4-44.2,43c0,26,21.2,43,44.4,43c15.4,0,30-6.8,42.4-17.8v32.2 c-13,7.8-30.8,12.6-44.6,12.6C33.2,140,0,107.8,0,70C0,30,33.4,0,73,0c15.2,0,33,4.6,44.6,10.4V42C103,32.4,88.2,27,74.8,27z"></path> <path class="st0" d="M201.6,140c-39.8,0-73.4-31-73.4-70c0-39.4,33.4-70,75.2-70c15.2,0,34,4,45.6,9.4v31.4 C235.8,33.2,218.8,27,204,27c-27.4,0-45.2,21.4-45.2,43c0,25.4,21,43.8,45.6,43.8c5.2,0,10.2-0.4,16.6-2.8V85.8h-22.4V59.2h51.2 V130C235.2,136.6,218.8,140,201.6,140z"></path> <path class="st0" d="M272.1,137.2V2.8h28.8v134.4L272.1,137.2L272.1,137.2z"></path> </g> </g> <g id="Protection"> </g> <g id="Guides"> </g> </svg>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CGI</span>
        </a>
        <button data-collapse-toggle="navbar-default" @click="showNavigation" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="" :class="{
          'w-full flex-grow lg:flex lg:items-center lg:w-auto' : true,
          'block': navigationState,
          'hidden': !navigationState,
        }">
          <div class="text-sm lg:flex-grow pt-4 lg:pt-0 lg:px-6">
            <a href="" class="block py-3 lg:py-0 lg:inline-block lg:mt-0 text-black text-base font-bold lg:mr-10">
              Home
            </a>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <div v-if="type === 'admin'">
    <nav class="bg-white border-gray-200 py-5 drop-shadow">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="" class="flex items-center">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 300.9 140" xml:space="preserve" class="logo-img fill-secondary" role="img" aria-label="CGI official logo" height="38px"> <g id="Layer_1"> <g> <path class="st0" d="M74.8,27c-27.4,0-44.2,21.4-44.2,43c0,26,21.2,43,44.4,43c15.4,0,30-6.8,42.4-17.8v32.2 c-13,7.8-30.8,12.6-44.6,12.6C33.2,140,0,107.8,0,70C0,30,33.4,0,73,0c15.2,0,33,4.6,44.6,10.4V42C103,32.4,88.2,27,74.8,27z"></path> <path class="st0" d="M201.6,140c-39.8,0-73.4-31-73.4-70c0-39.4,33.4-70,75.2-70c15.2,0,34,4,45.6,9.4v31.4 C235.8,33.2,218.8,27,204,27c-27.4,0-45.2,21.4-45.2,43c0,25.4,21,43.8,45.6,43.8c5.2,0,10.2-0.4,16.6-2.8V85.8h-22.4V59.2h51.2 V130C235.2,136.6,218.8,140,201.6,140z"></path> <path class="st0" d="M272.1,137.2V2.8h28.8v134.4L272.1,137.2L272.1,137.2z"></path> </g> </g> <g id="Protection"> </g> <g id="Guides"> </g> </svg>
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <button data-collapse-toggle="navbar-default" @click="showNavigation" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="" :class="{
          'w-full flex-grow lg:flex lg:items-center lg:w-auto' : true,
          'block': navigationState,
          'hidden': !navigationState,
        }">
          <div class="text-sm lg:flex-grow pt-4 lg:pt-0">
            <a href="" class="block py-3 lg:py-0 lg:inline-block lg:mt-0 text-black text-base font-bold lg:mr-10">
              Dashboard
            </a>
            <router-link to="users">
              <span class="block py-3 lg:py-0 lg:inline-block lg:mt-0 text-black text-base font-bold lg:mr-10">
                Users
              </span>
            </router-link>
            <router-link to="trips">
              <span class="block py-3 lg:py-0 lg:inline-block lg:mt-0 text-black text-base font-bold lg:mr-10">
                Trips
              </span>
            </router-link>
            <router-link to="vehicles">
              <span class="block py-3 lg:py-0 lg:inline-block lg:mt-0 text-black text-base font-bold lg:mr-10">
                Vehicles
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>

</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import {ref} from "vue";

defineProps({
  type: {
    type: String,
    required: true,
  },
});

let navigationState = ref(false);

function showNavigation() {
  navigationState.value = !navigationState.value
}
</script>

<style scoped>

</style>
