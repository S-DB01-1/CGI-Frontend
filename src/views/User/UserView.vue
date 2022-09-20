<template>
  <main>
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="w-full lg:w-2/3 bg-background-light py-4 px-6">
            <Title weight="normal" color="black" size="1">Reizen</Title>
            <Accordion title="Trips">
              <div v-for="trip in trips">
                <AccordionItem :title="trip.Date">
                <Title weight="normal" color="black" size="4">Totale uitstoot: {{trip.TotalEmmision}}</Title>
                <SegmentTable id="tripTable">
                  <SegmmentTableRow v-for="segment in tripSegments" :distance="segment.Distance" :time="segment.Time" vehicle-name=""></SegmmentTableRow>
                </SegmentTable>
                <Button theme="default" size="small" :onclick="ButtonClick()">aanpassen</Button>
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
  import { TripSegmentDTO } from "@/DTO/TripSegmentDTO";
  import { TripDTO } from "@/DTO/TripDTO";

  let trips: TripDTO[] = new Array<TripDTO>;
  trips[0] = new TripDTO(1,1,"20/09/2022 08:00", 220);
  
  let tripSegments: TripSegmentDTO[] = new Array<TripSegmentDTO>;
  tripSegments[0] = new TripSegmentDTO(1, 1, 30,20,0,3,100);
  tripSegments[1] = new TripSegmentDTO(2, 1, 21,35,0,2,120);
  tripSegments[2] = new TripSegmentDTO(3, 1, 2,10,0,1,0);

    function ButtonClick()
    {
      console.debug("oeoeoeooeoeoeoeo");
    }
</script>

<style scoped>

</style>