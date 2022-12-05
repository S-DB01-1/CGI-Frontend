<template>
    <div ref="arcordionitemsList" v-for="trip in trips" v-bind:key="trip.ID">
        <AccordionItem :title="trip.Date.toDateString() + ' ' + trip.ID">
        <Title weight="normal" color="black" size="4">Total Score: {{trip.TotalEmission}}</Title>
        <SegmentTable>
          <SegmmentTableRow v-for="segment in trip.Segments" :distance="segment.Distance" :time="segment.Time" :vehicle-name="segment.Vehicle.Name" :score="segment.Emission"></SegmmentTableRow>
        </SegmentTable>
        <Button theme="default" size="small" @click ="$emit('EditTrip', trip.ID)"><a href="">edit</a></Button>
        <Button theme="default" size="small" @click ="$emit('DeleteTrip', trip.ID);">delete</Button>
      </AccordionItem>
      </div>
</template>

<script setup lang="ts">
import Trip from '@/Model/Trip';
import SegmentTable from '../molecules/SegmentTable.vue';
import AccordionItem from './AccordionItem.vue';
import Button from './Forms/Button.vue';
import SegmmentTableRow from './SegmmentTableRow.vue';
import Title from './Title.vue';

defineProps({
  trips: {
    type: Array<Trip>,
    required: true,
  }
});
</script>