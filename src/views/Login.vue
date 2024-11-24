<template>
    <div>
      <LoginForm />
    </div>
  </template>

<script>
import LoginForm from '../components/LoginForm.vue';

export default {
  name: "LoginView", //멀티 워드로 변경
  components: {
    LoginForm,
  },
};
</script>