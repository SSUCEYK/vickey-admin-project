<template>
    <div class="upload-video">
      <h2>새로운 동영상 등록</h2>
      <form @submit.prevent="handleUpload">

        <label>Video Title</label>
        <input type="text" v-model="title" required />

        <label>Video URL</label>
        <input type="text" v-model="url" required />

        <button type="submit">Upload</button>
        
      </form>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      title: '',
      url: '',
    };
  },
  methods: {
    async handleUpload() {
      const contentId = this.$route.params.contentId;

      // 임시 데이터 처리
      console.log(`Uploading video with title: ${this.title}, URL: ${this.url}`);

      // 여기서 실제 API 호출을 하는 대신에
      // 임시로 업로드된 비디오를 콘텐츠에 추가한다고 가정
      // 예를 들어, 새 비디오를 contentId에 추가하는 방식으로 설정
      // 예시: 임시로 업로드된 비디오 데이터를 로그로 출력
      const uploadedVideo = {
        id: Date.now(),  // 임시 ID (현재 시간으로 생성)
        title: this.title,
        url: this.url,
      };
      
      console.log(`Video uploaded for content ${contentId}:`, uploadedVideo);
      
      // 업로드 후 해당 콘텐츠 상세 페이지로 리디렉션
      this.$router.push(`/api/episodes/${contentId}`);
    },
  },
};
</script>

<style scoped>
.upload-video {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-top: 10px;
  color: #555;
}

input[type="text"],
textarea {
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
}

textarea {
  min-height: 100px;
  resize: vertical;
}

button {
  margin-top: 20px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>

  
  <!-- <script>
  export default {
    data() {
      return {
        title: '',
        url: '',
      };
    },
    methods: {
      async handleUpload() {
        const contentId = this.$route.params.contentId;
        await this.$store.dispatch('uploadVideo', {
          contentId,
          title: this.title,
          url: this.url,
        });
        this.$router.push(`/content/${contentId}`);
      },
    },
  };
  </script>
   -->