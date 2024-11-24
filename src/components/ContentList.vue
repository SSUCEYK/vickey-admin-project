<template>
  <!-- <div>Hello, Vue!</div> -->
<div class="content-list">
      <h1>내 콘텐츠</h1>

      <!-- 콘텐츠 리스트를 그리드 형태로 표시 -->
      <div class="content-grid">
        <ContentCard 
          v-for="content in episodes" 
          :key="content.id" 
          :content="content" 
        />
      </div>

      <!-- 새로운 콘텐츠 추가 버튼 -->
      <button @click="$router.push('/upload-content')">새로운 콘텐츠 추가</button>
      
      <!-- 로딩 중 메시지 표시 -->  
      <div v-if="loading">Loading...</div>

    </div>
</template>

<script>
import axios from 'axios';
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
        const response = await axios.get('http://3.37.105.22:8080/api/episodes');
        this.episodes = response.data; // 응답 데이터로 episodes 배열 설정
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

/* 최대 폭과 중앙 정렬을 위한 스타일 추가 */
.content-list {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  position: relative; /* 버튼을 오른쪽으로 정렬하기 위해 상대 위치 지정 */
}

.header {
  display: flex;
  justify-content: space-between; /* 제목과 버튼을 양쪽 끝으로 배치 */
  align-items: center;
  margin-bottom: 20px;
}

/* 버튼 스타일 */
.add-content-button {
  position: absolute;
  right: 0;
  top: 0;
  /* display: inline-block; */
  margin-top: 10px; 
  margin-bottom: 20px;
  padding: 10px 20px;
  background-color: #6f42c1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

/* 콘텐츠를 그리드 형식으로 정렬하는 스타일 추가 */
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* 각 열의 최소 크기 설정 */
  gap: 20px; /* 카드 사이의 간격 */
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>



  
  <!-- <script>
  import ContentCard from './ContentCard.vue';
  
  export default {
    components: { ContentCard },
    data() {
      return {
        // 콘텐츠 리스트 데이터를 저장할 배열
        contents: [
        { id: 1, title: 'Sample Content 1', thumbnail: 'https://via.placeholder.com/150', updatedAt: '20xx-xx-xx' },
        { id: 2, title: 'Sample Content 2', thumbnail: 'https://via.placeholder.com/150', updatedAt: '20xx-xx-xx' },
      ],
      };
    },
  created() {
    console.log(this.contents); // 데이터 확인
  }
  };
  </script> -->
