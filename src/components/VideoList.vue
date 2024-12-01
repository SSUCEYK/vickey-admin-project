<template>
  <div class="video-list">
    <h1>동영상 리스트</h1>

    <!-- 새로운 동영상 추가 버튼 -->
    <button @click="navigateToUploadVideo">새로운 동영상 추가</button>
        
    <!-- 로딩 중 메시지 표시 -->  
    <div v-if="loading">Loading...</div>

    <div class="video-grid">
      <VideoCard 
        v-for="video in videos" 
          :key="video.episodeId" 
          :video="video" />
    </div>

  </div>  
  </template>
  
  <script>
  // import axios from 'axios';
  import VideoCard from './VideoCard.vue';

  export default {
    components: { VideoCard },
    props: { // 상위 컴포넌트에서 전달받음
    content: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {      
      videos: [], // API에서 가져온 데이터를 저장
      loading: true,
    };
    },
    created() {
      this.fetchVideos();
  },
  methods: {
    navigateToUploadVideo() {
      this.$router.push(`/api/videos/upload/${this.content.episodeId}`);
    },
    async fetchVideos() {
      try {
        // 데이터 확인
        console.log(this.content)

        // Vuex 액션 호출: 서버에서 this.content.id에 해당하는 videos를 모두 가져오는 api 요청: 응답 데이터로 videos 배열 설정
        this.videos = await this.$store.dispatch('fetchVideos', this.content);

        // 로딩 완료
        this.loading = false; 

      } catch (error) {
        console.error('Error fetching videos:', error);
        this.loading = false;
      }
    },
  },
  };
  </script>

<style scoped>
.video-list {
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
.add-video-button {
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

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>