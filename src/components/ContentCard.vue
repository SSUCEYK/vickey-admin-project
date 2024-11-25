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
/* 카드 기본 스타일 */
.content-card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 카드에 그림자 추가 */
  padding: 15px;
  transition: transform 0.2s;
  text-align: center;
  cursor: pointer;
}

/* 카드 호버 시 확대 효과 */
.content-card:hover {
  transform: scale(1.05);
}

/* 썸네일 이미지 스타일 */
.thumbnail {
  width: 100%; /* 카드의 너비에 맞게 */
  height: 180px;
  object-fit: cover; /* 이미지를 비율에 맞게 */
  border-radius: 4px;
  margin-bottom: 10px;
}

/* 제목 스타일 */
h3 {
  font-size: 1.2rem;
  margin: 10px 0;
}

/* 업데이트 날짜 텍스트 스타일 */
.updated-at {
  font-size: 0.9rem;
  color: #555;
}
</style>