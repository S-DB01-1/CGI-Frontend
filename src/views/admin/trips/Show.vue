<template>
  <div>
    <Navigation type="admin"></Navigation>
    <div class="bg-background h-screen">
      <Section>
        <div class="w-100 mx-6 mb-3 bg-white lg:w-2/3 lg:p-0 lg:mx-auto shadow-md rounded-lg ">
          <div class="px-6 py-4 uppercase mb-3 text-xs bg-secondary rounded-t-lg  text-white">
            <Title size="4" weight="bold" color="white">Details of trip - 1</Title>
          </div>

          <div class="py-8 px-12">
            <div class="flex">
              <div class="w-100 p-0 lg:w-1/2 pr-1">
                <FormKit
                    label="User"
                    type="text"
                    placeholder="User"
                    value="Tom Maessen"
                    required
                    disabled=""
                />
              </div>
              <div class="w-100 p-0 lg:w-1/2 pl-1">
                <FormKit
                    label="Date"
                    type="text"
                    placeholder="Date"
                    required
                    value="2022-10-17"
                    disabled=""
                />
              </div>
            </div>
            <div class="flex">
              <div class="w-100 p-0 lg:w-1/2 pr-1">
                <FormKit
                    label="Total kilometers"
                    type="text"
                    placeholder="User"
                    value="34 km"
                    required
                    disabled=""
                />
              </div>
              <div class="w-100 p-0 lg:w-1/2 pl-1">
                <FormKit
                    label="Total emission"
                    type="text"
                    placeholder="User"
                    value="101 points"
                    required
                    disabled=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-100 px-6 lg:w-2/3 lg:p-0 m-auto">
          <div class="overflow-x-auto relative shadow-md rounded-lg">
            <Table :items="items" :fields="fields">
              <template #cell(title)="{ value, item }">
                <p><strong>{{ value }}</strong></p>
                <p>{{ item.id }}</p>
              </template>
            </Table>
          </div>
          <div class="flex justify-between py-3">
            <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              Go back to summary
            </a>
            <div>
              <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                Previous
              </a>

              <a href="#" class="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
                Next
              </a>
            </div>
          </div>
        </div>

      </Section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

import Navigation from '../../../components/molecules/Navigation.vue'
import Section from '../../../components/molecules/Section.vue'
import Title from '../../../components/atoms/Title.vue'
import Button from '../../../components/atoms/Forms/Button.vue'

import Table from '../../../components/atoms/Table.vue'

const items = ref([
  { id: 1, vehicle: 'Train', distance: '32 km', total_emission: '89 points' },
  { id: 2, vehicle: 'Bike', distance: '2 km', total_emission: '12 points' },
])

const fields = ref([
  { key: 'vehicle', label: 'Vehicle' },
  { key: 'distance', label: 'Distance' },
  { key: 'total_emission', label: 'Total points' },
])

</script>

<style scoped>

</style>
