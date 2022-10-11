import { ref, computed } from "vue";
import type Trip from "./Model/Trip";

export default function handlePagination(pageSize: number, data: Array<any>) {
  let page = ref(1);

  const perPage = pageSize;

  const Data = data;

  const buttonTheme = (pagenum: number) => {
    if (pagenum == page.value) {
      return "white";
    }
    else{
      return "default";
    }
  }

  const paginatedData = computed(() =>
    Data.slice((page.value - 1) * perPage, page.value * perPage)
  );

  const nextPage = () => {
    if (page.value !== Math.ceil(data.length / perPage)) {
      page.value += 1;
    }
  };

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
  };

  const goToPage = (numPage: number) => {
    page.value = numPage;
  };

  return { data, paginatedData, perPage, page, buttonTheme, nextPage, backPage, goToPage };
}
