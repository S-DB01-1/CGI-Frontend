<template>
  <div>
    <Navigation type="admin"></Navigation>
    <div class="bg-background h-screen">
      <Section>
        <div class="mx-6 lg:m-0">
          <div class="w-100 lg:w-2/3 lg:p-0 m-auto rounded-lg">
            <div class="bg-white rounded m-auto shadow-md rounded-lg mb-3 p-4">
              <BarChart :labels="['Bike', 'Car', 'Train', 'Bus', 'Electric bike', 'Walking', 'Electric step', 'Scooter', 'Boat' ,'Car pooling']" :data="[80, 20, 30, 10, 5, 50, 35, 60, 12, 43]" />
            </div>

            <Test size="4" color="primary" weight="bold" class="my-6">
              View all vehicles
            </Test>

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
        </div>
      </Section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import Navigation from '../../../components/molecules/Navigation.vue'
import Section from '../../../components/molecules/Section.vue'
import Test from '../../../components/atoms/Title.vue'
import Table from '../../../components/atoms/Table.vue'
import BarChart from '../../../components/graph/BarChart.vue';

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
