<template>
    <div>
      <ContentList />
    </div>
  </template>
  

<script>
import ContentList from '../components/ContentList.vue';

export default {
  name: "HomeView", //멀티 워드로 변경
  components: {
    ContentList,
  },
};
</script>

<style scoped>
.home-page {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  background-color: #f9f9f9;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
}
</style>