<template>
    <div class="video-list">
      <h2>동영상 리스트</h2>
      <div class="video-grid">
      <VideoCard v-for="video in videos" :key="video.id" :video="video" />
      </div>
    </div>

    <!-- 새로운 동영상 추가 버튼 -->
    <button @click="navigateToUploadVideo">새로운 동영상 추가</button>
          
    <!-- 로딩 중 메시지 표시 -->  
    <div v-if="loading">Loading...</div>
  </template>
  
  <script>
  import axios from 'axios';
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
      this.$router.push(`/upload-video/${this.content.id}`);
    },
    async fetchVideos() {
      try {
        // API에서 데이터 가져오기
        const response = await axios.get(`http://3.37.105.22:8080/api/episodes/${this.content.id}`);
        this.videos = response.data; // 응답 데이터로 episodes 배열 설정
        this.loading = false; // 로딩 완료
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
  margin-top: 100px;
  padding: 0;
  /* text-align: center; */
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center; /* 수평 가운데 정렬 */
  padding: 0 10px; /* 좌우 여백 추가 */
}
</style>