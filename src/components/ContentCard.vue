<template>
    <!-- 콘텐츠 카드 클릭 시 상세 페이지로 이동 -->
    <div class="content-card" @click="goToContentDetail">
      <!-- 콘텐츠 썸네일 이미지 -->
      <img :src="content.thumbnailUrl" alt="Thumbnail" />
      <!-- 콘텐츠 제목 및 업데이트 날짜 -->
      <h3>{{ content.title }}</h3>
      <p>{{ content.releasedDate }}</p>
    </div>
  </template>

  <script>
  export default {
    props: {
      content: Object, // content 객체를 props로 받음
    },
    methods: {
      goToContentDetail() {
        console.log(this.content)
        this.$router.push({path: `/api/episodes/${this.content.episodeId}`});
      },
    },
  };
  </script>
  
<style scoped>
.content-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.content-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
}

.content-card img {
  width: 100%;
  height: 200px; /* 이미지 높이 고정 */
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 10px;
}

.content-card h3 {
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin: 5px 0;
}

.content-card p {
  font-size: 0.9rem;
  color: #666;
}
</style>
