export const state = () => ({
  articles: null,
  profile: null,
  recommendArticles: null
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

    
    // 初期データを公開順にソート及び分類に必要なものを追加
    const nowDate = new Date();
    const myarticles = Object.entries(getArticles)
    .map(([k, v]) => {
      const createdDate = new Date(v.publishDate);
      v.createdDate = createdDate;
      if (v.createdDate > nowDate) {
        v.delete = true;
      } else {
        v.delete = false;
      };
      return v;
    })
    .sort((a, b) => (a.createdDate > b.createdDate ? -1 : 1));

    
    // 初期データの公開前記事を削除
    let db = { ...myarticles }
    for (const id in db) {
      if (db[id].delete == true) {
        delete db[id]
      };
    }
    
    // カルーセル用のデータベース作成
    let recommend = { ...db }
    for (const id in recommend) {
      if (recommend[id].recommend == false) {
        delete recommend[id]
      };
    }
    const myrecommendArticles = Object.entries(recommend)
    
    const myprofile = getProfile;
    commit("FETCH_POST_ARTICLES", db);
    commit("FETCH_POST_RECOMMENDARTICLES", myrecommendArticles);
    commit("FETCH_POST_PROFILE", myprofile.body);
  }
};
