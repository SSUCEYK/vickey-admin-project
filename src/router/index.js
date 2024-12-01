import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import ContentDetailPage from '../views/ContentDetailPage.vue';
import UploadContentPage from '../views/UploadContentPage.vue';
import UploadVideoPage from '../views/UploadVideoPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/api/episodes/:contentId', component: ContentDetailPage },
  { path: '/api/episodes/upload', component: UploadContentPage },  
  { path: '/api/videos/upload/:contentId', component: UploadVideoPage },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
