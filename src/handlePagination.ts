import { ref, computed } from "vue";

export default function handlePagination(pageSize: number, maxPages: number, data: Array<any>) {
  let page = ref(1);

  const Data = data;

  const pagecount = Math.ceil(data.length / pageSize);

  let maxLeft = (page.value - Math.floor(maxPages / 2));
  let maxright = (page.value + Math.floor(maxPages / 2));

  const pageButtonTheme = (pagenum: number) => {
    if (pagenum == page.value) {
      return "white";
    }
    else{
      return "default";
    }
  }

  const paginatedData = computed(() =>
    Data.slice((page.value - 1) * pageSize, page.value * pageSize)
  );

  const nextPage = () => {
    if (page.value !== pagecount) {
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

  
  const pageRange = () => {
    maxLeft = (page.value - Math.floor(maxPages / 2));
    maxright = (page.value + Math.floor(maxPages / 2));

    if (maxLeft < 1) {
      maxLeft = 1;
      maxright = maxPages;
    }
    if (maxright > pagecount) {
      maxLeft = pagecount - (maxPages - 1);
      maxright = pagecount;

      if (maxLeft < 1) {
        maxLeft = 1;
      }
    }

    var array = [],
    j = 0;
    for(var i = maxLeft; i <= maxright; i++){
    array[j] = i;
    j++;
    }
    return array;
  }
  return { data, paginatedData, page, pagecount, pageButtonTheme, nextPage, backPage, goToPage, pageRange };
}
