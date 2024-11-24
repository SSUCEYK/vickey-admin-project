<template>
    <div class="video-list">
      <h2>동영상 리스트</h2>
      <div class="video-grid">
      <VideoCard v-for="video in videos" :key="video.id" :video="video" />
      </div>
    </div>
  </template>
  
  <script>
  import VideoCard from './VideoCard.vue';

  export default {
    components: { VideoCard },
    props: ['videos'], // 상위 컴포넌트에서 동영상 배열을 전달받음
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