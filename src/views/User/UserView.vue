<template>
  <main>
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row gap-4">
        <div class="w-full lg:w-2/3 bg-background-light py-4 px-6">
            <Title weight="normal" color="black" size="1">Reizen</Title>
            <Accordion title="Trips">
              <AccordionItem title="19/09/2022 om 08:10 uur">
                <Title weight="normal" color="black" size="4">Totale uitstoot: {{}}</Title>
                <SegmentTable title="">
                  <SegmmentTableRow :distance="2" :time="10" vehicle-name="Fiets"></SegmmentTableRow>
                  <SegmmentTableRow :distance="21" :time="35" vehicle-name="Bus"></SegmmentTableRow>
                  <SegmmentTableRow :distance="30" :time="20" vehicle-name="trein"></SegmmentTableRow>
                </SegmentTable>
                <Button theme="default" size="small">aanpassen</Button>
              </AccordionItem>
              <AccordionItem title="19/09/2022 om 15:35 uur">
                <Title weight="normal" color="black" size="4">Totale uitstoot: {{}}</Title>
                <SegmentTable id="tripTable" title="">
                  <SegmmentTableRow v-for="object in tripSegments" :distance="object.Distance" :time="object.Time" vehicle-name=""></SegmmentTableRow>
                </SegmentTable>
                <Button theme="default" size="small">aanpassen</Button>
              </AccordionItem>
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
  
  let tripSegments: TripSegmentDTO[] = new Array<TripSegmentDTO>;
  tripSegments[0] = new TripSegmentDTO(1, 1, 30,20,0,3,100);
  tripSegments[1] = new TripSegmentDTO(2, 1, 21,35,0,2,120);
  tripSegments[2] = new TripSegmentDTO(3, 1, 2,10,0,1,0);

</script>

<style scoped>

</style>