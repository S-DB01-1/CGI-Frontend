<template>
  <div>
    <Navigation type="admin"></Navigation>
    <div class="bg-background h-screen">
      <Section>
        <div class="w-100 mx-6 mb-3 bg-white lg:w-2/3 lg:p-0 lg:mx-auto shadow-md rounded-lg ">
          <div class="px-6 py-4 uppercase mb-3 text-xs bg-secondary rounded-t-lg  text-white">
            <Title size="4" weight="bold" color="white">Details of user - info@tommaessen.nl</Title>
          </div>

          <div class="py-8 px-12">
            <div class="flex">
              <div class="w-100 p-0 lg:w-1/2 lg:pr-1">
                <FormKit
                    label="Name"
                    type="text"
                    placeholder="User"
                    value="Tom Maessen"
                    required
                    disabled=""
                />
              </div>
              <div class="w-100 p-0 lg:w-1/2 lg:pl-1">
                <FormKit
                    label="Email"
                    type="email"
                    placeholder="Email"
                    required
                    value="info@tommaessen.nl"
                    disabled=""
                />
              </div>
            </div>
            <div class="flex">
              <div class="w-100 p-0 lg:w-1/2 lg:pr-1">
                <FormKit
                    label="Total kilometers this month"
                    type="text"
                    placeholder="User"
                    value="91 km"
                    required
                    disabled=""
                />
              </div>
              <div class="w-100 p-0 lg:w-1/2 lg:pr-1">
                <FormKit
                    label="Total emission this month"
                    type="text"
                    placeholder="User"
                    value="288 points"
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

import Table from '../../../components/atoms/Table.vue'

const items = ref([
  { id: 1, date: '2022-10-11', total_emission: '101', total_kilometers: '34 km' },
  { id: 2, date: '2022-10-12', total_emission: '79', total_kilometers: '21 km' },
  { id: 3, date: '2022-10-17', total_emission: '108', total_kilometers: '36 km' },
])

const fields = ref([
  { key: 'date', label: 'Trip date' },
  { key: 'total_emission', label: 'Total points' },
  { key: 'total_kilometers', label: 'Total kilometers'}
])

</script>

<style scoped>

</style>
