<template>
    <div class="upload-video">
      <h2>새로운 동영상 등록</h2>

      <!-- 파일 선택 -->
      <input type="file" ref="fileInput" @change="onFileChange" accept="video/*" />
    
      <!-- 업로드 버튼 -->
      <button @click="uploadVideo" :disabled="!selectedFile">업로드</button>


      <!-- <form @submit.prevent="handleUpload">

        <label>Video Title</label>
        <input type="text" v-model="title" required />

        <label>Video URL</label>
        <input type="text" v-model="url" required />
        <button type="submit">Upload</button>
        
      </form> -->
    </div>
  </template>

<script>
export default {
  data() {
    return {
      // url: '',
      selectedFile: null, // 사용자가 선택한 파일

      //video_id//자동
      //episode_id//자동 props
      //duration //추후 계산해야함
      //video_num //추후 입력 받기
      
      //title //db 추가해야할듯 - 불필요할수도
      //thumbnail_url //db 추가해야함 - 필수

      loading: true,

    };
  },

  methods: {
    onFileChange(event) {
      this.selectedFile = event.target.files[0]; // 파일 선택 시 이벤트
    },
    async uploadVideo() {

      this.loading = true;

      if (!this.selectedFile) {
        alert("업로드할 파일을 선택하세요.");
        return;
      }

      try {
        const episodeId = this.$route.params.contentId;

        const formData = new FormData();
        formData.append("file", this.selectedFile);

        // S3 업로드 API 호출
        await fetch(`http://3.37.105.22:8080/api/videos/upload/${episodeId}`, {
          method: "POST",
          body: formData,
          mode: "cors",
        });

        alert("동영상 업로드 성공!");
        this.$router.push(`/api/episodes/${episodeId}`);
        
      } catch (error) {
        console.error("동영상 업로드 실패:", error);
        alert("동영상 업로드 중 오류가 발생했습니다.");

      } finally {
        this.loading = false;
      }
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