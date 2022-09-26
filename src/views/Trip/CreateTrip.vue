<template>
  <Navigation></Navigation>
  <div>
    <Modal name="createSegmentModal" @onModalClose="onModalClose" :state="modalState" class="flex h-screen justify-center items-center">
      <Title color="primary" weight="bold" size="4" class="mb-3">Reisdeel toevoegen</Title>

      <form v-on:submit.prevent="submitForm()">
        <SelectGroup name="vehicle" label="Voertuig"></SelectGroup>
        <InputGroup placeholder="Afstand in kilometers" status="default" name="distance" label="Afstand" required></InputGroup>
        <InputGroup type="number" placeholder="Reistijd in minuten" status="default" name="time" label="Reistijd" required></InputGroup>

        <div class="flex justify-end">
          <Button type="submit" size="default" theme="default">Toevoegen</Button>
        </div>
      </form>
    </Modal>

    <Hero>
      <Title size="1" weight="bold" color="primary">Nieuwe reis aanmaken</Title>
    </Hero>
    <Section>
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="w-full lg:w-3/5 py-4 px-6 m-auto">

            <!-- Trip date -->
            <InputGroup placeholder="Reis datum" status="default" name="tripdate" label="Reis datum"></InputGroup>

            <!-- Trip segments -->

            <div class="flex justify-between mb-3">
              <Label>Reis delen</Label>
              <button @click="showModal">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="flex justify-center">
              <div class="trip-segment-container w-full" v-show="tripSegments.length > 0">
                <ul class="w-full text-gray-900">
                  <li v-for="(segment, index) in tripSegments" v-bind:key="index" class="w-full flex justify-between bg-background-light py-3 px-5 mb-3">
                    <span>{{ segment.vehicle }} ({{ segment.distance }} km, {{ segment.time }} min)</span>
                    <div class="">
                      <i class="fas fa-edit mr-3 text-primary cursor-pointer"></i>
                      <i class="fas fa-trash text-secondary cursor-pointer" @click="deleteItem(index)"></i>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="trip-segment-container w-full" v-show="tripSegments.length <= 0">
                <ul class="w-full text-gray-900">
                  <li class="w-full flex justify-between bg-background-light py-3 px-5 mb-3">
                    <span>Geen reisdelen gevonden...</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="flex justify-end my-4">
              <Button size="large" theme="default" class="w-full">Reis aanmaken</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<script setup lang="ts">
import InputGroup from '../../components/molecules/Forms/InputGroup.vue'
import SelectGroup from '../../components/molecules/Forms/SelectGroup.vue'
import Modal from '../../components/atoms/Modal.vue'
import Section from '../../components/molecules/Section.vue'
import Button from '../../components/atoms/Forms/Button.vue'
import Title from '../../components/atoms/Title.vue'
import Label from '../../components/atoms/Forms/Label.vue'
import Hero from '../../components/molecules/Hero.vue'
import Navigation from '../../components/molecules/Navigation.vue'

import { ref } from "vue";

let modalState = ref(false);
function showModal(){
  modalState.value = !modalState.value
}
function onModalClose(n: any) {
  modalState.value = n
}

let vehicle = ref('')
let distance = ref('')
let time = ref('')
let tripSegments = ref([])

function submitForm() {
  vehicle = document.getElementById('vehicle').value;
  distance = document.getElementById('distance').value;
  time = document.getElementById('time').value;

  tripSegments.value.push({ vehicle: vehicle, distance: distance, time: time })

  clearForm();
  showModal();
}

function updateSegment(index) {
  let segment = tripSegments[index];
  document.getElementById('distance').value = segment.distance;
  document.getElementById('time').value = segment.time;
}

function deleteItem(index) {
  tripSegments.value.splice(index, 1);
}

function clearForm() {
  document.getElementById('distance').value = '';
  document.getElementById('time').value = '';
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
</style>
