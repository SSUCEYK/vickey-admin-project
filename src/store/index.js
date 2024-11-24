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
    async fetchContents({ commit }) {
      const response = await fetch('/api/contents');
      const contents = await response.json();
      commit('setContents', contents);
    },
    async login({ commit }, { email, password }) {
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      });
      const user = await response.json();
      commit('setUser', user);
      return user;
    },
    async uploadContent(_, content) {
      await fetch('/api/contents', {
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
