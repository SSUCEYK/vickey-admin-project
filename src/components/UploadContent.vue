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
        <button type="submit">Upload</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        thumbnail: '',
      };
    },
    methods: {
      async handleUpload() {
        try {
          await this.$store.dispatch('uploadContent', {
            title: this.title,
            description: this.description,
            thumbnail: this.thumbnail,
          });
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
  max-width: 500px;
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