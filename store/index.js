import createPersistedState from "vuex-persistedstate";
export const state = () => ({
  articles: null,
  profile: null,
  recommendArticles: null,
  newsArticles: null
});

export const getters = {
  articles: state => state.articles,
  recommendArticles: state => state.recommendArticles,
  profile: state => state.profile,
  newsArticles: state => state.newsArticles
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
  },
  FETCH_POST_NEWSARTICLES(state, payload) {
    state.newsArticles = payload;
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
    const newsFilterDate = new Date().setMonth(nowDate.getMonth() - 1)

    const myarticles = Object.entries(getArticles)
    .map(([k, v]) => {
      const createdDate = new Date(v.publishDate);
      v.createdDate = createdDate;
      var year = createdDate.getFullYear();
      var month = createdDate.getMonth() + 1;
      var day = createdDate.getDate();
      v.date = `${year}年${month}月${day}日`
      
      if (v.createdDate > nowDate) {
        v.delete = true;
      } else {
        v.delete = false;
      };
      if (v.createdDate < newsFilterDate) {
        v.newsFilter = true;
      } else {
        v.newsFilter = false;
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

    // news欄に使用するデータのフィルター
    let newsdb = { ...db }
    for (const id in newsdb) {
      if (newsdb[id].newsFilter == true) {
        delete newsdb[id]
      };
    }

    const myrecommendArticles = Object.entries(recommend)
    
    const myprofile = getProfile;
    commit("FETCH_POST_ARTICLES", db);
    commit("FETCH_POST_RECOMMENDARTICLES", myrecommendArticles);
    commit("FETCH_POST_PROFILE", myprofile.body);
    commit("FETCH_POST_NEWSARTICLES", newsdb)
  }
};
