<template>
    <div>
      <!-- Google 로그인 버튼 -->
       <button @click="loginWithGoogle">Google 로그인</button>
  </div>
    <div class="login-form">
      <h2>Sign In</h2>
      <!-- 로그인 폼 시작 -->
      <form @submit.prevent="handleLogin">
        <div>
          <!-- 이메일 입력 필드 -->
          <label>Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <!-- 비밀번호 입력 필드 -->
          <label>Password</label>
          <input type="password" v-model="password" required />
        </div>
        <!-- 로그인 버튼 -->
        <button type="submit">Sign In</button>
      </form>
      <!-- 비밀번호 찾기 링크 -->
      <router-link to="/forgot-password">Forgot password?</router-link>
    </div>    
  </template>
  
  <script>
  import { googleLogin } from '../auth';
  
  export default {
    data() {
      return {
        // 사용자가 입력한 이메일과 비밀번호를 저장
        email: '',
        password: '',
      };
    },
    methods: {
      // 로그인 버튼 클릭 시 실행되는 메서드
      async handleLogin() {
        try {
          // Vuex를 사용하여 로그인 API 호출
          const response = await this.$store.dispatch('login', {
            email: this.email,
            password: this.password,
          });
          // 로그인 성공 시 메인 페이지로 이동
          if (response.success) {
            this.$router.push('/');
          }
        } catch (error) {
          console.error('Login failed:', error);
        }
      },

    // Google 로그인 메서드
    async loginWithGoogle() {
        try {
          const user = await googleLogin();
          if (user) {
            // Google 로그인 성공 후, 메인 페이지로 이동
            this.$router.push('/');
          }
        } catch (error) {
          console.error('Google login failed:', error);
        }
      }
    },
  };
  </script>
  