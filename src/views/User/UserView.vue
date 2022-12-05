<template>
    <Navigation type="user"></Navigation>
  <main>
    <div class="container mx-auto">
        <div class="w-full sm:w-3/3 lg:w-2/3 bg-background-light py-4 px-6 mb-4">
          <Title weight="normal" color="black" size="1">Trip overview</Title>
          <!-- datepicker -->
          <v-date-picker class="inline-block h-full w-full mb-3" v-model="date" :max-date='new Date()' color="red" :input="ReFillList()">
            <template v-slot="{ inputValue, togglePopover }">
              <div class="flex items-center">
                <input
                  :value="inputValue"
                  class="px-3 py-1 w-full text-lg font-source-sans-pro font-medium bg-white border-2 border-background"
                  readonly @click="togglePopover()"
                />
                </div>
            </template>
          </v-date-picker>
          <!-- list of trips -->
          <Accordion title="Trips">
            <UserTripItem :trips="handlePaginationvalue.paginatedData" v-on:EditTrip="EditTrip" v-on:DeleteTrip="showDeleteModal">

            </UserTripItem>
            <!-- <div ref="arcordionitemsList" v-for="trip in handlePaginationvalue.paginatedData.value">
              <AccordionItem :title="trip.Date.toDateString() + ' ' + trip.ID">
              <Title weight="normal" color="black" size="4">Total Score: {{trip.TotalEmission}}</Title>
              <SegmentTable>
                <SegmmentTableRow v-for="segment in trip.Segments" :distance="segment.Distance" :time="segment.Time" :vehicle-name="segment.Vehicle.Name" :score="segment.Emission"></SegmmentTableRow>
              </SegmentTable>
              <Button theme="default" size="small" @click ="EditTrip(trip.ID)"><a href="">edit</a></Button>
              <Button theme="default" size="small" @click ="showDeleteModal(), tempDeleteId = trip.ID">delete</Button>
            </AccordionItem>
            </div> -->
          </Accordion>
          <Pagination :handle-paginationvalue="handlePaginationvalue" >
          </Pagination>
          <br>
          <Button theme="default" size="small"><a href="/">Add trip</a></Button>
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
            <Button theme="white" size="small" @click ="showDeleteModal()">Cancel</Button>
            <Button theme="default" size="small" @click ="DeleteTrip(tempDeleteId), showDeleteModal()">Delete</Button>
          </div>
        </div>
      </div>
    </div>
      <div class="py-6">
        <div class="w-full sm:w-3/3 lg:w-2/3 py-4 px-6 bg-white border rounded">
          <div class="bg-white rounded m-auto rounded-lg mb-3 p-4">
            <LineChart :labels="['09-11-2022', '10-11-2022', '11-11-2022', '12-11-2022', '13-11-2022', '14-11-2022', '15-11-2022']" :user-data="[80, 20, 30, 10, 5, 50, 20]" :avarage-data="[50, 40, 25, 45, 20, 40, 60]" />
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
  import { reactive, ref } from "vue";
  import LineChart from '../../components/graph/LineChart.vue';
  import Vehicle from "@/Model/Vehicle";
  import UserTripItem from "@/components/atoms/UserTripItem.vue";

  const store = useTripStore();
  const { Read } = storeToRefs(store);
  let trips = ref([]);
  let deleteSegmentModelState = ref(false);
  let tempDeleteId: number = 0;
  const date = ref(new Date());
  let handlePaginationvalue = reactive(handlePagination(5, 5, []));

  function showDeleteModal() {
    deleteSegmentModelState.value = !deleteSegmentModelState.value
  }

  let segment1 = new TripSegment(1, 1, 30, 40, 0, 400, new Vehicle(1, "Bus", 20));
  let segment2 = new TripSegment(2, 1, 20, 15, 0, 150, new Vehicle(2, "Train", 5));
  let segment3 = new TripSegment(3, 1, 1, 7, 0, 0, new Vehicle(3, "Walking", 0));
  //for test data (i know its ugly :) ) 
  for (let i = 1; i < 20; i++) {
    let trip = new Trip(i,1,new Date(),550,[segment1, segment2, segment3]);
    await store.Create(trip);
  }

  for (let j = 20; j < 25; j++) {
    let trip = new Trip(j,1,new Date("2022-11-29"),550,[segment1, segment2, segment3]);
    console.debug(trip);
    await store.Create(trip);
  }

  ReFillList();

  function ReFillList()
  {
    console.debug("ReFillList()");
    trips = ref([])
    for (const key in Read.value) {
      if (Read.value.hasOwnProperty(key) && IsSameDate(Read.value[key].Date)) {
        trips.value[Read.value[key].ID] = (Read.value[key]);
      }
    }
    handlePaginationvalue = reactive(handlePagination(5, 5, trips.value));
    console.debug(handlePaginationvalue);    
  }

  function IsSameDate(tripDate: Date): boolean
  {
      return (tripDate.getDate() == date.value.getDate()
              && tripDate.getDay() == date.value.getDay()
              && tripDate.getFullYear() == date.value.getFullYear())
  }

  function EditTrip(tripID: number)
  {

  }

  function DeleteTrip(tripID: number)
  {
    //store.Delete(tripID);
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
