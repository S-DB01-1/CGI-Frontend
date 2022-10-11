<template>
    <Navigation></Navigation>
  <main>
    <div class="container mx-auto">
        <div class="w-full sm:w-3/3 lg:w-2/3 bg-background-light py-4 px-6">
          <Title weight="normal" color="black" size="1">Trip overview</Title>
          <Accordion title="Trips">
            <!-- <div ref="arcordionitemsList" :inner-h-t-m-l="FillArcordion()">
            </div> -->
            <div ref="arcordionitemsList" v-for="trip in handlePaginationvalue.paginatedData.value" :key="trip.ID">
              <AccordionItem :title="trip.Date.toDateString() + ' ' + trip.ID">
              <Title weight="normal" color="black" size="4">Total Emmision: {{trip.TotalEmission}}</Title>
              <SegmentTable>
                <SegmmentTableRow v-for="segment in trip.Segments" :distance="segment.Distance" :time="segment.Time" :vehicle-name="segment.VehicleID.toString()"></SegmmentTableRow>
              </SegmentTable>
              <Button theme="default" size="small" @click ="EditTrip(trip.ID)">edit</Button>
            </AccordionItem>
            </div>
          </Accordion>
          <div id="pagination">
            <Button theme="default" size="small" @click="handlePaginationvalue.backPage">prev</Button>
            <Button :theme="handlePaginationvalue.buttonTheme(item)" size="small"
              v-for="item in Math.ceil(handlePaginationvalue.data.length / handlePaginationvalue.perPage)"
              :key="item"
              :id="'pageBtnRef'+item"
              @click="() => handlePaginationvalue.goToPage(item)"
            >
              {{ item }}
            </Button>
            <Button theme="default" size="small" @click="handlePaginationvalue.nextPage">next</Button>
          </div>
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
import { onMounted, ref } from "vue";
import handlePagination from "@/handlePagination";
  const store = useTripStore();
  const { Read } = storeToRefs(store);
  const trips: Array<Trip> = []; 

  let segment1 = new TripSegment(1, 1, 30, 40, 0, 400, 1);
  let segment2 = new TripSegment(2, 1, 20, 15, 0, 150, 2);
  let segment3 = new TripSegment(2, 1, 1, 7, 0, 0, 3);
  let trip1 = new Trip(1,1,new Date(),550,[segment1, segment2, segment3]);
  let trip2 = new Trip(1,1,new Date(),550,[segment3, segment2, segment1]);

  for (let i = 0; i < 20; i++) {
    let trip = new Trip(i,1,new Date(),550,[segment1, segment2, segment3]);
    trips[i] = trip;
  }

  console.debug("create trip");
  store.Create(trip1);
  store.Create(trip2);

  const handlePaginationvalue = handlePagination(5, trips);
  
  // onMounted(() => {
  //   handlePaginationvalue.colorCurrentPage();
  // })

  // onMounted(() => {
  //     let item = document.getElementById("pageBtnRef1");
  //     item.classList.add("Selected");
  //   });

//   onMounted(() => {
//     FillArcordion();
// })

  // function FillArcordion(): String
  // {
  //   let List = ref("arcordionitemsList");
  //   let Accordion = "";
  //   console.debug("FillArcordion: " + List);

  //   for (let i = 0; i < 2; i++) {
  //     let row = "<AccordionItem :title='" + Read.value[i].Date.toDateString() + "'>" + 
  //                 "<Title weight='normal' color='black' size='4'>Totale uitstoot: " + Read.value[i].TotalEmission + "</Title>" + 
  //                 "<SegmentTable>";

  //     let segments = Read.value[i].Segments;
  //     for (let j = 0; j < 2; j++)              
  //     {
  //       row += "<SegmmentTableRow :distance='" + segments[j].Distance + "' :time='" + segments[j].Time + "' :vehicle-name='" + segments[j].VehicleID + "'>" +
  //               "</SegmmentTableRow>";
  //               console.debug("ROW: " + row);
  //     }
  //     row +=     "</SegmentTable>" +
  //                "<Button theme='default' size='small' @click ='EditTrip(trip.ID)'>aanpassen</Button>" +
  //               "</AccordionItem>";
  //     console.debug("ROW: " + row);
  //     Accordion += row;
  //   }
  //   console.debug("ACCORDION: " + Accordion);
  //   return Accordion;  
  // }

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

.Selected {
  color: black;
  background-color: white;
}
</style>