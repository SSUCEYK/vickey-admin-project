<template>
  <div>
    <!-- 로딩 중 메시지 -->
    <div v-if="!content">Loading content...</div>
    <!-- 콘텐츠 상세 페이지 -->
    <div v-else>
      <!-- <ContentDetail :content="content" /> -->
      <VideoList :content="content" />
    </div>
  </div>
  </template>
  
  
<script>
import VideoList from '@/components/VideoList.vue';
// import ContentDetail from '../components/ContentDetail.vue';

export default {
  components: {
    // ContentDetail,
    VideoList,
  },
  data() {
    return {
      content: null, // 콘텐츠 데이터를 저장할 변수
    };
  },
  async created() {
    try {
      // URL의 파라미터에서 콘텐츠 ID를 가져옴
      console.log('Route params:', this.$route.params); // params 값 출력
      const contentId = this.$route.params.contentId;
      console.log('Content ID:', contentId);
      
      // Vuex 액션 호출: 서버에서 콘텐츠 상세 정보를 가져옴
      this.content = await this.$store.dispatch('fetchContentDetail', contentId);

    } catch (error) {
      console.error('Failed to load content detail:', error);
    }
  },
  
  // created() {
  //   // URL의 파라미터에서 콘텐츠 ID를 가져옴
  //   const contentId = this.$route.params.id;
  //   console.log(contentId)

  //   // 콘텐츠 데이터를 contentId를 바탕으로 가져오는 로직
  //   // 여기서는 임시 데이터를 사용
  //   this.content = {
  //     id: contentId,
  //     title: `Sample Content ${contentId}`,
  //     description: `This is a sample description for content ${contentId}.`,
  //     thumbnail: 'https://via.placeholder.com/150',
  //     videos: [
  //       { id: 1, title: 'Sample Video 1', url: 'https://via.placeholder.com/150' },
  //       { id: 2, title: 'Sample Video 2', url: 'https://via.placeholder.com/150' },
  //     ],
  //   };

  //   console.log(this.content)

  // },
};
</script>

<style scoped>
/* 필요한 스타일 추가 가능 */
</style>