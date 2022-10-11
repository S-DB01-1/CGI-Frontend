<template>
  <Navigation type="user"></Navigation>
  <div>
    <div id="createSegmentModal" tabindex="-1" aria-hidden="true" :class="{
      'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full backdrop flex h-screen justify-center items-center' : true,
      'block': createSegmentModelState,
      'hidden': !createSegmentModelState,
    }">
      <div class="modal-dialog modal-dialog-centered relative m-auto p-4 w-full max-w-4xl h-full md:h-auto content-center	">
        <div class="relative bg-white rounded-lg shadow">
          <button @click="onCreateModalClose(false)" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " :data-modal-toggle="name">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Sluit popup</span>
          </button>
          <div class="py-6 px-6 lg:px-8">
            <Title color="primary" weight="bold" size="4" class="mb-3">Reisdeel toevoegen</Title>

            <form v-on:submit.prevent="submitForm()">
              <FormKit
                  label="Vervoersmiddel"
                  type="select"
                  placeholder="Vervoersmiddel"
                  v-model="vehicle"
                  :options="[
              'Auto',
              'Fiets',
              'Trein',
            ]"
                  required
              />

              <FormKit
                  label="Afstand in kilometers"
                  type="number"
                  placeholder="Afstand in kilometers"
                  v-model="distance"
                  required
              />

              <FormKit
                  label="Tijd in minuten"
                  type="number"
                  placeholder="Tijd in minuten"
                  v-model="time"
                  required
              />

              <div class="flex justify-end">
                <Button type="submit" size="default" theme="default">Toevoegen</Button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

    <div id="editSegmentModal" tabindex="-1" aria-hidden="true" :class="{
      'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full backdrop flex h-screen justify-center items-center' : true,
      'block': editSegmentModelState,
      'hidden': !editSegmentModelState,
    }">
      <div class="modal-dialog modal-dialog-centered relative m-auto p-4 w-full max-w-4xl h-full md:h-auto content-center	">
        <div class="relative bg-white rounded-lg shadow">
          <button @click="onEditModalClose(false)" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " :data-modal-toggle="name">
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Sluit popup</span>
          </button>
          <div class="py-6 px-6 lg:px-8">
            <Title color="primary" weight="bold" size="4" class="mb-3">Reisdeel bewerken</Title>

            <form v-on:submit.prevent="submitEditForm(editIndex)">
              <FormKit
                  label="Vervoersmiddel"
                  type="select"
                  placeholder="Vervoersmiddel"
                  v-model="editVehicle"
                  :options="[
              'Auto',
              'Fiets',
              'Trein',
            ]"
                  required
              />

              <FormKit
                  label="Afstand in kilometers"
                  type="number"
                  placeholder="Afstand in kilometers"
                  v-model="editDistance"
                  required
                  :value="editDistance"
              />

              <FormKit
                  label="Tijd in minuten"
                  type="number"
                  placeholder="Tijd in minuten"
                  v-model="editTime"
                  required
              />

              <div class="flex justify-end">
                <Button type="submit" size="default" theme="default">Opslaan</Button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>

    <Hero>
      <Title size="1" weight="bold" color="primary">
        Nieuwe reis <br>
        aanmaken
      </Title>
    </Hero>
    <Section>
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="w-full lg:w-3/5 py-4 px-6 m-auto">

            <!-- Trip date -->
            <v-date-picker class="inline-block h-full w-full mb-3" v-model="date" :max-date='new Date()' color="red">
              <template v-slot="{ inputValue, togglePopover }">
                <div class="flex items-center">
                  <input
                      :value="inputValue"
                      class="px-3 py-1 w-full text-lg font-source-sans-pro font-medium bg-white border-2 border-background"
                      readonly @click="togglePopover()"
                  />
                </div>
              </template>
            </v-date-picker>

            <!-- Trip segments -->

            <div class="flex justify-between mb-3">
              <Label>Reis delen</Label>
              <button @click="showCreateModal">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="flex justify-center">
              <div class="trip-segment-container w-full" v-show="tripSegments.length > 0">
                <ul class="w-full text-gray-900">
                  <li v-for="(segment, index) in tripSegments" v-bind:key="index" class="w-full flex justify-between bg-background-light py-3 px-5 mb-3">
                    <span>{{ segment.vehicle }} ({{ segment.distance }} km, {{ segment.time }} min)</span>
                    <div class="">
                      <i class="fas fa-edit mr-3 text-primary cursor-pointer" @click="showEditModal(index)"></i>
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
import { ref } from 'vue';

import Section from '../../components/molecules/Section.vue'
import Button from '../../components/atoms/Forms/Button.vue'
import Title from '../../components/atoms/Title.vue'
import Label from '../../components/atoms/Forms/Label.vue'
import Hero from '../../components/molecules/Hero.vue'
import Navigation from '../../components/molecules/Navigation.vue'

import Datepicker from '../../components/atoms/Datepicker.vue'

const date = ref(new Date());

let createSegmentModelState = ref(false);
let editSegmentModelState = ref(false);

let vehicle = ref('')
let distance = ref('')
let time = ref('')

let tripSegments = ref([])

let editVehicle = ref('')
let editDistance = ref('')
let editTime = ref('')
let editIndex = ref(0)

function showCreateModal() {
  createSegmentModelState.value = !createSegmentModelState.value
}

function showEditModal(index: number) {
  editIndex.value = index
  editVehicle.value = tripSegments.value[index].vehicle
  editDistance.value = tripSegments.value[index].distance
  editTime.value = tripSegments.value[index].time

  editSegmentModelState.value = !editSegmentModelState.value
}

function onCreateModalClose(n: any) {
  createSegmentModelState.value = n
}

function onEditModalClose(n: any) {
  editSegmentModelState.value = n
}

function submitForm() {
  if(distance.value != '' || time.value != '') {
    tripSegments.value.push({ vehicle: vehicle.value, distance: distance.value, time: time.value })

    clearForm();
    showCreateModal();
  }
}

function deleteItem(index: number) {
  tripSegments.value.splice(index, 1);
}

function submitEditForm(index: any) {
  tripSegments.value[index].vehicle = editVehicle.value
  tripSegments.value[index].distance = editDistance.value
  tripSegments.value[index].time = editTime.value

  clearForm()
  onEditModalClose(false)
}

function clearForm() {
  vehicle.value = ''
  time.value = ''
  distance.value = ''

  editVehicle.value = ''
  editTime.value = ''
  editDistance.value = ''
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
