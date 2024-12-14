<template>
  <div class="content-list">
    <h1>내 콘텐츠</h1>

    <!-- 새로운 콘텐츠 추가 버튼 -->
    <button @click="$router.push('/api/episodes/upload')">새로운 콘텐츠 추가</button>

    <!-- 로딩 중 메시지 표시 -->  
    <div v-if="loading">Loading...</div>

    <!-- 콘텐츠 리스트를 그리드 형태로 표시 -->
    <div class="content-grid">
      <ContentCard 
        v-for="content in episodes" 
        :key="content.id" 
        :content="content" 
      />
    </div>

  </div>
</template>

<script>
// import axios from 'axios';
import ContentCard from './ContentCard.vue'

export default {
  components: {ContentCard}, 
  data() {
    return {      
      episodes: [], // API에서 가져온 데이터를 저장
      loading: true,
    };
  },
  created() {
    this.fetchEpisodes();
  },
  methods: {
    async fetchEpisodes() {
      try {
        // API에서 데이터 가져오기
        this.episodes = await this.$store.dispatch('fetchContents');

        this.loading = false; // 로딩 완료

      } catch (error) {

        console.error('Error fetching episodes:', error);
        this.loading = false;
        
      }
    },
  },
};
</script>

<style scoped>
.content-list {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* 최소 크기와 반응형 설정 */
  gap: 20px; /* 카드 사이 간격 */
}

.add-content-button {
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #6f42c1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-content-button:hover {
  background-color: #5a329a;
}

</style>
