<template>
  <Line
      :chart-options="{
        responsive: true,
        bezierCurve: true
      }"
      :chart-data="{
        labels: labels,
        datasets: [ { data: userData, borderColor: '#e41937', backgroundColor: '#e41937', label: 'Your score', lineTension: 0.3 }, { data: avarageData, borderColor: '#5236ab', backgroundColor: '#5236ab', label: 'Avarage score', lineTension: 0.3} ],
      }"
      :width="1000"
      :height="400"
  />
</template>

<script setup="ts">
import { defineComponent, defineProps } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  Legend
} from 'chart.js'

ChartJS.register(
    Title,
    Tooltip,
    LineElement,
    LinearScale,
    PointElement,
    CategoryScale,
    Legend
)

defineProps({
  userData: {
    default: [],
  },
  avarageData: {
    default: [],
  },
  labels: {
    default: []
  }
})

defineComponent({
  name: 'BarChart',
  components: { Line },
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

</style>
