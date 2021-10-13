import Vue from 'vue'
import Vuex from 'vuex'
import characters from './modules/characters.js'
import VuexPersist from 'vuex-persist'
const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage,
})
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    characters,
  },
  plugins: [vuexPersist.plugin],
})
