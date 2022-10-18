<template>
  <div>
    <Navigation type="admin"></Navigation>
    <div class="bg-background h-screen">
      <Section>
        <div class="w-100 mx-6 bg-white lg:w-2/3 lg:p-0 m-auto shadow-md rounded-lg mb-3">
          <Title size="4" color="primary" weight="bold" class="mb-6">
            View all vehicles
          </Title>

          <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
            <Table :items="items" :fields="fields">
              <template #cell(title)="{ value, item }">
                <p><strong>{{ value }}</strong></p>
                <p>{{ item.id }}</p>
              </template>
            </Table>
          </div>

          <div class="flex justify-end py-3">
            <a href="#" class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              Previous
            </a>

            <a href="#" class="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              Next
            </a>
          </div>
        </div>
      </Section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import Navigation from '../../../components/molecules/Navigation.vue'
import Section from '../../../components/molecules/Section.vue'
import Title from '../../../components/atoms/Title.vue'
import Table from '../../../components/atoms/Table.vue'

const items = ref([
  { id: 1, vehicle: 'Car', emission: '10', action: 'Edit' },
  { id: 2, vehicle: 'Bike', emission: '1', action: 'Edit' },
])

const fields = ref([
  { key: 'vehicle', label: 'Vehicle' },
  { key: 'emission', label: 'Emission per KM' },
  { key: 'action', label: 'Action' }
])

</script>

<style scoped>

</style>
