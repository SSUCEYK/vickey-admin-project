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

        <!-- 썸네일 업로드 -->
        <label>Thumbnail Image</label>
        <input type="file" @change="onThumbnailChange" accept="image/*" required />

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
        thumbnailFile: null,
        episodeCount: 1,
        castList: "",
        releasedDate: "",
      };
    },
    methods: {
        // 썸네일 파일 선택 처리
      onThumbnailChange(event) {
        this.thumbnailFile = event.target.files[0];
      },
      // 콘텐츠 업로드 처리
      async handleUpload() {
        try {
          // releasedDate가 비어 있으면 현재 날짜를 기본값으로 설정
          if (!this.releasedDate) {
            const today = new Date();
            this.releasedDate = today.toISOString().split("T")[0]; // 'YYYY-MM-DD' 형식
          }

          // 썸네일 파일 업로드
          if (!this.thumbnailFile) {
            alert("Thumbnail 이미지 파일을 선택하세요.");
            return;
          }

          const formData = new FormData();
          formData.append("file", this.thumbnailFile);

          const response = await fetch("http://3.37.105.22:8080/api/episodes/upload/thumbnail", {
            method: "POST",
            body: formData,
            mode: "cors",
          });

          if (!response.ok) {
            throw new Error("썸네일 업로드 실패");
          }

          const result = await response.json(); // 응답 JSON 파싱
          const thumbnailUrl = result.url; // 업로드된 썸네일 URL 추출
          console.log("upload thumbnail url: ", thumbnailUrl);

          // 콘텐츠 업로드 데이터 구성
          const contentData = {
            title: this.title,
            description: this.description,
            thumbnailUrl: thumbnailUrl, // 업로드된 URL
            episodeCount: this.episodeCount,
            castList: this.castList,
            releasedDate: this.releasedDate,
          };

          console.log("Content Data for Upload:", contentData); // 요청 데이터 확인

          // 콘텐츠 데이터 업로드: 에피소드 생성 요청
          const episodeResponse = await fetch("http://3.37.105.22:8080/api/episodes/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(contentData),
          });

          if (!episodeResponse.ok) {
            throw new Error("에피소드 생성 실패");
          }

          const episodeResult = await episodeResponse.json();
          const episodeId = episodeResult.id; // 생성된 ID

          alert(`Episode created successfully with ID: ${episodeId}`);
          this.$router.push("/");

        } catch (error) {
          console.error("콘텐츠 업로드 실패:", error);
          alert("업로드 중 오류가 발생했습니다.");
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