<template>
    <Navigation></Navigation>
  <main>
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="w-full lg:w-2/3 bg-background-light py-4 px-6">
          <Title weight="normal" color="black" size="1">Reis overzicht</Title>
          <Accordion title="Trips">
            <div v-for="trip in Read">
              <AccordionItem :title="trip.Date.toDateString()">
              <Title weight="normal" color="black" size="4">Totale uitstoot: {{trip.TotalEmission}}</Title>
              <SegmentTable>
                <SegmmentTableRow v-for="segment in trip.Segments" :distance="segment.Distance" :time="segment.Time" :vehicle-name="segment.Emission.toString()"></SegmmentTableRow>
              </SegmentTable>
              <Button theme="default" size="small" @click ="EditTrip(trip.ID)">aanpassen</Button>
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
  import Button from "../../components/atoms/Forms/Button.vue";
  import { useTripStore } from "@/stores/Trip";
  import Trip from "../../Model/Trip";
  import TripSegment from "@/Model/TripSegment";
  import Navigation from '../../components/molecules/Navigation.vue'
  import { storeToRefs } from "pinia";
import router from "@/router";

  const store = useTripStore();
  const { Read } = storeToRefs(store);

  let segment1 = new TripSegment(1, 1, 30, 40, 0, 400, 1);
  let segment2 = new TripSegment(2, 1, 20, 15, 0, 150, 2);
  let segment3 = new TripSegment(2, 1, 1, 7, 0, 0, 3);
  let trip1 = new Trip(1,1,new Date(),550,[segment1, segment2, segment3]);
  let trip2 = new Trip(1,1,new Date(),550,[segment3, segment2, segment1]);

  console.debug("create trip");
  store.Create(trip1);
  store.Create(trip2);

  function EditTrip(tripID: number)
  {
    	console.debug("EDIT TRIP: " + tripID);
  }

    function ButtonClick()
    {
      console.debug("oeoeoeooeoeoeoeo");
    }
</script>

<style scoped>

</style>