<!-- 사용 안 함 -->

<template>
    <div class="content-detail">

      <h2> 테스트 </h2>

      <!-- 콘텐츠 썸네일 이미지 -->
      <div class="thumbnail">
        <img :src="content.thumbnail" alt="Thumbnail" />
      </div>
      
      <!-- 콘텐츠 상세 정보 표시 -->
      <div class="details">
        <h2>{{ content.title }}</h2>
        <p>{{ content.description }}</p>
        
        <!-- 새로운 동영상 추가 버튼 -->
        <!-- <button @click="$router.push(`/upload-video/${content.id}`)">새로운 동영상 추가</button> -->
        <button @click="navigateToUploadVideo">새로운 동영상 추가</button>
      </div>
  
      <!-- 해당 콘텐츠에 포함된 동영상 리스트 -->
      <VideoList :videos="content.videos" />
    </div>
  </template>
  
  <script>
  import VideoList from './VideoList.vue';
  export default {
  components: { VideoList },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateToUploadVideo() {
      this.$router.push(`/upload-video/${this.content.id}`);
    },
  },
};
</script>

<style scoped>
.content-detail-page {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.thumbnail {
  margin-bottom: 20px;
}

.thumbnail img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
}

.details {
  margin-bottom: 30px;
  width: 100%;
}

.details h2 {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.details p {
  font-size: 1rem;
  color: #666;
  margin-bottom: 20px;
}

.add-video-button {
  padding: 10px 20px;
  background-color: #6f42c1;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

@media (max-width: 600px) {
  .thumbnail img {
    width: 100px;
    height: 100px;
  }

  .details h2 {
    font-size: 1.5rem;
  }
}
</style>