import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store/index.js';

const app = createApp(App);

// 라우터와 스토어 연결
app.use(router);
app.use(store);

app.mount('#app');
