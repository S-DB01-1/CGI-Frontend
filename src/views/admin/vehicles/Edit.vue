<template>
  <div>
    <Navigation type="admin"></Navigation>
    <div class="bg-background h-screen">
      <Section>
        <div class="bg-white w-2/3 m-auto shadow-md rounded-lg mb-3">
          <div class="px-6 py-4 uppercase mb-3 text-xs bg-secondary rounded-t-lg  text-white">
            <Title size="4" weight="bold" color="white">Edit vehicle - Car</Title>
          </div>

          <div class="px-12 py-8">
            <div>
              <FormKit
                  label="Vehicle"
                  type="text"
                  placeholder="Vehicle name"
                  required
                  value="Car"
              />
            </div>
            <div>
              <FormKit
                  label="Emission per kilometer"
                  type="number"
                  placeholder="Emission per kilometer"
                  required
                  value="10"
              />
            </div>
            <div class="flex justify-end">
              <Button theme="default" size="default" type="button">Save vehicle</Button>
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
import Title from '../../../components/atoms/Title.vue'
import Table from '../../../components/atoms/Table.vue'
import Button from '../../../components/atoms/Forms/Button.vue'

const items = ref([
  { id: 1, user: 'Tom Maessen', date: '11-10-2022', total_emission: '20', action: 'Edit' },
  { id: 2, user: 'Tom Maessen', date: '11-10-2022', total_emission: '20', action: 'Edit' },
])

const fields = ref([
  { key: 'user', label: 'User' },
  { key: 'date', label: 'Trip date' },
  { key: 'total_emission', label: 'Total points' },
  { key: 'action', label: 'Action' }
])

</script>

<style scoped>

</style>
