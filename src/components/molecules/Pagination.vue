<template>
    <div class="pagination">
        <Button theme="default" size="small" 
            @click="handlePaginationvalue.backPage" 
            v-if="handlePaginationvalue.page.value != 1">
            prev
        </Button>
        <Button :theme="handlePaginationvalue.pageButtonTheme(pageNum)" size="small"
            v-for="pageNum in handlePaginationvalue.pageRange()"
            
            :key="pageNum"
            @click="() => handlePaginationvalue.goToPage(pageNum)"
        >
            {{ pageNum }}
        </Button>
        <span v-if="!handlePaginationvalue.pageRange().includes(handlePaginationvalue.pagecount)"> ... </span>
        <Button theme="default" size="small" 
            @click="handlePaginationvalue.nextPage" 
            v-if="handlePaginationvalue.page.value != handlePaginationvalue.pagecount">
            next
        </Button>
    </div>
</template>

<script setup lang="ts">
    import Button from "../../components/atoms/Forms/Button.vue";
    import { defineProps } from 'vue';

    defineProps({
    handlePaginationvalue: {
        type: Object,
        required: true
    }
    });

</script>

<style scoped>
.pagination {
  align-content: center;
  width: fit-content;
}
</style>