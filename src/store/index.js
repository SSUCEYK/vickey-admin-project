import { createStore } from 'vuex';

const store = createStore({
  state: {
    contents: [],
    user: null,
  },
  mutations: {
    setContents(state, contents) {
      state.contents = contents;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      const user = await response.json();
      commit('setUser', user);
      return user;
    },
    async fetchContents({ commit }) {
      const response = await fetch('/api/episodes');
      const contents = await response.json();
      commit('setContents', contents);
    },
    async fetchContentDetail(_, contentId) {
      const response = await fetch(`/api/episodes/${contentId}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch content with ID ${contentId}`);
      }
      return await response.json();
    },
    async uploadContent(_, content) {
      await fetch('/api/episodes', {
        method: 'POST',
        body: JSON.stringify(content),
      });
    },
    async uploadVideo(_, video) {
      await fetch('/api/videos', {
        method: 'POST',
        body: JSON.stringify(video),
      });
    },
  },
});

export default store;
