<template>
    <div class="upload-content">
      <h2>새로운 컨텐츠 등록</h2>
      <form @submit.prevent="handleUpload">

        <!-- 콘텐츠 제목 입력 -->
        <label>Title</label>
        <input type="text" v-model="title" required />

        <!-- 콘텐츠 설명 입력 -->
        <label>Description</label>
        <textarea v-model="description" required></textarea>

        <!-- 콘텐츠 썸네일 이미지 URL 입력 -->
        <label>Thumbnail URL</label>
        <input type="text" v-model="thumbnail" required />

        <!-- 에피소드 수 입력 -->
        <label>Episode Count</label>
        <input type="number" v-model="episodeCount" min="1" required />

        <!-- 출연진 리스트 입력 -->
        <label>Cast List (comma separated)</label>
        <input type="text" v-model="castList" required />

        <!-- 출시일 입력 -->
        <label>Released Date</label>
        <input type="date" v-model="releasedDate" required />

        <button type="submit">Upload</button>

      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: "",
        description: "",
        thumbnail: "",
        episodeCount: 1,
        castList: "",
        releasedDate: "",
      };
    },
    methods: {
      async handleUpload() {
        try {
          // releasedDate가 비어 있으면 현재 날짜를 기본값으로 설정
          if (!this.releasedDate) {
            const today = new Date();
            this.releasedDate = today.toISOString().split("T")[0]; // 'YYYY-MM-DD' 형식
          }

          // Vuex의 uploadContent 액션 호출
          await this.$store.dispatch('uploadContent', {
            title: this.title,
            description: this.description,
            thumbnail: this.thumbnail,
            episodeCount: this.episodeCount,
            castList: this.castList,
            releasedDate: this.releasedDate,
          });
          
          // 임시 데이터 처리 
          console.log(`Uploading a content: ${this.title}, descrpt: ${this.description}, thumb: ${this.thumbnail}`);

          // 업로드 성공 시, 홈으로 이동
          this.$router.push('/');

        } catch (error) {
          console.error('Upload failed:', error);
        }
      },
    },
  };
  </script>
  
<style scoped>
.upload-content {
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