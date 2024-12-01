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
    async fetchContents() {
      return fetch(`http://3.37.105.22:8080/api/episodes`)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to fetch contents`);
        return response.json();
      })
      .catch((error) => {
        console.error(`Failed to load content detail: ${error.message}`);
      });
      // const response = await fetch('/api/episodes');
      // const contents = await response.json();
      // commit('setContents', contents);
    },
    async fetchContentDetail(_, contentId) {
      return fetch(`http://3.37.105.22:8080/api/episodes/${contentId}`)
          .then((response) => {
              if (!response.ok) throw new Error(`Failed to fetch content with ID ${contentId}`);
              return response.json();
          })
          .catch((error) => {
              console.error(`Failed to load content detail: ${error.message}`);
          });
    },
    async fetchVideos(_, content) {
      const url = `http://3.37.105.22:8080/api/videos/${content.episodeId}`; // 체크
      console.log(url)
      return fetch(url)
          .then((response) => {
              if (!response.ok) throw new Error(`Failed to fetch videos with ID ${content.episodeId}`);
              return response.json();
          })
          .catch((error) => {
              console.error(`Failed to load videos: ${error.message}`);
          });
    },
    async uploadContent(_, content) {
      await fetch('http://3.37.105.22:8080/api/episodes/upload', {
        method: 'POST',
        body: JSON.stringify(content),
      });
    },
    async uploadVideo(_, video) {
      await fetch('http://3.37.105.22:8080/api/videos/upload', {
        method: 'POST',
        body: JSON.stringify(video),
      });
    },
  },
});

export default store;
