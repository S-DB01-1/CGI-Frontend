<template>
  <div class="BarChart">
    <div>
      <Bar
      :chart-options="{
        responsive: true,
        backgroundColor: [
          'rgb(255, 99, 132, 0.6)',
          'rgb(255, 159, 64, 0.5)',
          'rgb(255, 205, 86, 0.5)',
          'rgb(75, 192, 192, 0.4)',
          'rgb(54, 162, 235, 0.4)',
          'rgb(153, 102, 255, 0.4)',
          'rgb(201, 203, 207, 0.4)'
        ],
      }"
      :chart-data="{
        labels: labels,
        datasets: [ { data: data } ],
      }"
      :width="1000"
      :height="400"
  />
    </div>
  </div>
</template>

<script setup="ts">
import { defineComponent, defineProps } from 'vue'
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, BarElement, CategoryScale, LinearScale, Filler} from 'chart.js'

ChartJS.register(Title, Tooltip, BarElement, CategoryScale, LinearScale, Filler)

defineProps({
  data: {
    default: [],
  },
  labels: {
    default: []
  }
})

defineComponent({
  name: 'BarChart',
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
  },
})


</script>

<style scoped>
.BarChart {
  overflow: scroll;
  /* width: 500px; */
}

.BarChart div {
  width: 500px;
}

@media (min-width: 640px) {
  .BarChart {
    overflow: hidden;
    /* width: 1000px; */
  }

  .BarChart div {
    width: 1000px;
  }
}
</style>
