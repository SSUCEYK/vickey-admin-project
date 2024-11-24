<template>
  <div class="video-card">
    <img :src="video.url" alt="Video Thumbnail" class="video-thumbnail" />
    <router-link :to="`/video/${video.id}`">{{ video.title }}</router-link>
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
  padding: 15px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  text-align: center;
  list-style: none;
}

.video-card:hover {
  transform: scale(1.05);
}

.video-thumbnail {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
}
</style>
