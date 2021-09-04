export const state = () => ({
  articles: null,
  profile: null
});

export const getters = {
  articles: state => state.articles,
  recommendArticles: state => state.recommendArticles,
  profile: state => state.profile
};

export const mutations = {
  FETCH_POST_ARTICLES(state, payload) {
    state.articles = payload;
  },
  FETCH_POST_RECOMMENDARTICLES(state, payload) {
    state.recommendArticles = payload;
  },
  FETCH_POST_PROFILE(state, payload) {
    state.profile = payload;
  }
};

export const actions = {
  async nuxtServerInit({ commit }, { app }) {
    const getArticles = await app.flamelink.content.get({
      schemaKey: "articles",
      populate: true
    });
    const getProfile = await app.flamelink.content.get({
      schemaKey: "profile",
      populate: true
    });

    // データ加工
    const myarticles = Object.entries(getArticles)
      .map(([k, v]) => {
        const createdDate = new Date(v._fl_meta_.createdDate._seconds * 1000);
        v.createdDate = createdDate; // (1)
        return v;
      })
      .sort((a, b) => (a.createdDate > b.createdDate ? -1 : 1)); // (3)

    for (const id in getArticles) {
      if (getArticles[id].recommend == false) {
        delete getArticles[id]
      };
    }

    const myrecommendArticles = Object.entries(getArticles)
    
    const myprofile = getProfile;
    commit("FETCH_POST_ARTICLES", myarticles);
    commit("FETCH_POST_RECOMMENDARTICLES", myrecommendArticles);
    commit("FETCH_POST_PROFILE", myprofile.body);
  }
};
