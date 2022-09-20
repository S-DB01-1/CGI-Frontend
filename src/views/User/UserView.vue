<template>
  <main>
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="w-full lg:w-2/3 bg-background-light py-4 px-6">
            <Title weight="normal" color="black" size="1">Reizen</Title>
            <Accordion title="Trips">
              <div v-for="trip in trips">
                <AccordionItem :title="trip.Date.toDateString()">
                <Title weight="normal" color="black" size="4">Totale uitstoot: {{trip.TotalEmmision}}</Title>
                <SegmentTable id="tripTable">
                  <SegmmentTableRow v-for="segment in trip.Segments" :distance="segment.Distance" :time="segment.Time" vehicle-name=""></SegmmentTableRow>
                </SegmentTable>
                <Button theme="default" size="small">aanpassen</Button>
              </AccordionItem>
              </div>
            </Accordion>
        </div>
    </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import SegmentTable from "../../components/molecules/SegmentTable.vue";
  import SegmmentTableRow from "../../components/atoms/SegmmentTableRow.vue";
  import AccordionItem from "../../components/atoms/AccordionItem.vue";
  import Accordion from "../../components/molecules/Accordion.vue";
  import Title from "../../components/atoms/Title.vue";
  import Button from "../../components/atoms/Button.vue";
  import { useTripStore } from "@/stores/Trip";
  import Trip from "../../Model/Trip";

  let trips = new Array<Trip>;
  let trip = new Trip(1,1,new Date(),234567,[]);
  
  console.debug("Before store");
  const store = useTripStore();
  console.debug("Store: "+ store);
  store.Create(trip);

  let abc = useTripStore().$state;
  console.debug("State: "+ abc);

</script>

<style scoped>

</style>