<template>
  <GradesTable :listData="listData" @pageData="pageData" />
</template>

<script setup>
import GradesTable from '../../components/User/GradesTable.vue';
import api from '../../api';
import { useStore } from 'vuex';
import { ref } from 'vue';

const store = useStore();
const listData = ref();
const page = ref({});
const pageData = (value) => {
  page.value = value;
  query();
};
const query = () => {
  api.practiceApi.query({
    userId: store.state.user.user.userId,
    scene: "0",
    page: {
      pageSize: page.value.pageSize,
      pageNo: page.value.page
    }
  }).then(res => {
    if (res.data.success) {
      listData.value = res.data;
    }
  });
};


</script>

<style scoped></style>
