<template>
  <div class="video-card">
    <!-- 썸네일 출력 -->
    <img
      :src="video.thumbnailUrl || fallbackThumbnail"
      alt="Video Thumbnail"
      class="video-thumbnail"
    />
    <!-- 비디오 제목 및 기타 정보 -->
    <div class="video-info">
      <h3>{{ video.videoNum ? `Episode ${video.videoNum}` : 'No Title' }}</h3>
      <p>{{ video.duration ? `${video.duration} seconds` : 'Duration Unknown' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
.video-card {
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.video-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

.video-thumbnail {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  transition: opacity 0.3s;
}

.video-thumbnail:hover {
  opacity: 0.9;
}

.video-info h3 {
  font-size: 1.1rem;
  margin: 5px 0;
  font-weight: 600;
  color: #333;
}

.video-info p {
  font-size: 0.9rem;
  color: #666;
}
</style>
