import { ref, computed } from "vue";

export default function handlePagination(pageSize: number, maxPages: number, data: Array<any>) {
  let page = ref(1);

  const perPage = pageSize;

  const maxpagecount = maxPages;

  const Data = data;

  const pagecount = Math.ceil(data.length / perPage);

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
    Data.slice((page.value - 1) * perPage, page.value * perPage)
  );

  const nextPage = () => {
    if (page.value !== pagecount) {
      page.value += 1;
    }
    calcPages();
  };

  const backPage = () => {
    if (page.value !== 1) {
      page.value -= 1;
    }
    calcPages();
  };

  const goToPage = (numPage: number) => {
    page.value = numPage;
    calcPages();
  };

  
  const calcPages = () => {
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

    console.debug("maxleft :" + maxLeft);
    console.debug("maxright :" + maxright);
  }

  return { data, paginatedData, page, maxpagecount, pagecount, pageButtonTheme, nextPage, backPage, goToPage };
}
