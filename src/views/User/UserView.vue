<template>
    <Navigation type="user"></Navigation>
  <main>
    <div class="container mx-auto">
        <div class="w-full sm:w-3/3 lg:w-2/3 bg-background-light py-4 px-6">
          <Title weight="normal" color="black" size="1">Trip overview</Title>
          <Accordion title="Trips">
            <div ref="arcordionitemsList" v-for="trip in handlePaginationvalue.paginatedData.value" :key="trip.ID">
              <AccordionItem :title="trip.Date.toDateString() + ' ' + trip.ID">
              <Title weight="normal" color="black" size="4">Total Score: {{trip.TotalEmission}}</Title>
              <SegmentTable>
                <SegmmentTableRow v-for="segment in trip.Segments" :distance="segment.Distance" :time="segment.Time" :vehicle-name="segment.VehicleID.toString()" :score="segment.Emission"></SegmmentTableRow>
              </SegmentTable>
              <Button theme="default" size="small" @click ="EditTrip(trip.ID)"><a href="/home">edit</a></Button>
              <Button theme="default" size="small" @click ="showDeleteModal(), tempDeleteId = trip.ID">delete</Button>
            </AccordionItem>
            </div>
          </Accordion>
          <Pagination :handle-paginationvalue="handlePaginationvalue" >
          </Pagination>
          <br>
          <Button theme="default" size="small"><a href="/home">add trip</a></Button>
        </div>
        <div id="deleteSegmentModal" tabindex="-1" aria-hidden="true" :class="{
      'overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full backdrop flex h-screen justify-center items-center' : true,
      'block': deleteSegmentModelState,
      'hidden': !deleteSegmentModelState,
    }">
      <div class="modal-dialog modal-dialog-centered relative m-auto p-4 w-full max-w-4xl md:h-auto content-center	">
        <div class="relative bg-white rounded-lg shadow">
          <button @click="showDeleteModal()" type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " >
            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="py-6 px-6 lg:px-8">
            <Title color="primary" weight="bold" size="4" class="mb-3">Are you sure?</Title>
            <Button theme="white" size="small" @click ="showDeleteModal()">cancel</Button>
            <Button theme="default" size="small" @click ="DeleteTrip(tempDeleteId), showDeleteModal()">delete</Button>
          </div>
        </div>
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
  import handlePagination from "@/handlePagination";
  import Pagination from "../../components/molecules/Pagination.vue";
  import { ref } from "vue";
  let deleteSegmentModelState = ref(false);
  let tempDeleteId: number = 0;

  function showDeleteModal() {
    deleteSegmentModelState.value = !deleteSegmentModelState.value
}
  function onDeleteModalClose(n: any) {
  deleteSegmentModelState = n;  
  }


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

  function DeleteTrip(tripID: number)
  {
    //store.Delete(tripID);
    console.debug("DELETE TRIP: " + tripID);
    
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

.backdrop {
  background-color: rgba(0,0,0,0.5);
}

@media (min-width: 640px) {
  .container {
    max-width: 100% !important;
  }
}

</style>