<template>
    <Navigation></Navigation>
  <main>
    <div class="container mx-auto">
        <div class="w-full sm:w-3/3 lg:w-2/3 bg-background-light py-4 px-6">
          <Title weight="normal" color="black" size="1">Trip overview</Title>
          <Accordion title="Trips">
            <div ref="arcordionitemsList" v-for="trip in handlePaginationvalue.paginatedData.value" :key="trip.ID">
              <AccordionItem :title="trip.Date.toDateString() + ' ' + trip.ID">
              <Title weight="normal" color="black" size="4">Total Score: {{trip.TotalEmission}}</Title>
              <SegmentTable>
                <SegmmentTableRow v-for="segment in trip.Segments" :distance="segment.Distance" :time="segment.Time" :vehicle-name="segment.VehicleID.toString()"></SegmmentTableRow>
              </SegmentTable>
              <Button theme="default" size="small" @click ="EditTrip(trip.ID)">edit</Button>
            </AccordionItem>
            </div>
          </Accordion>
          <Pagination :handle-paginationvalue="handlePaginationvalue" >
          </Pagination>
          <br>
          <Button theme="default" size="small">add trip</Button>
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
  import handlePagination from "@/handlePagination";
  import Pagination from "../../components/molecules/Pagination.vue";
  const store = useTripStore();
  const { Read } = storeToRefs(store);
  const trips: Array<Trip> = [];

  let segment1 = new TripSegment(1, 1, 30, 40, 0, 400, 1);
  let segment2 = new TripSegment(2, 1, 20, 15, 0, 150, 2);
  let segment3 = new TripSegment(3, 1, 1, 7, 0, 0, 3);
  for (let i = 1; i < 38; i++) {
    let trip = new Trip(i,1,new Date(),550,[segment1, segment2, segment3]);
    await store.Create(trip);
  }
  
  for (const key in Read.value) {
    if (Read.value.hasOwnProperty(key)) {
        trips[Read.value[key].ID] = (Read.value[key]);
    }
  }

  const handlePaginationvalue = handlePagination(5, 5, trips);

  function EditTrip(tripID: number)
  {
    	console.debug("EDIT TRIP: " + tripID);
  }
</script>

<style scoped>
.container {
  padding-left: 0;
  padding-right: 0;
}

.container div{
  margin: auto;
}
</style>