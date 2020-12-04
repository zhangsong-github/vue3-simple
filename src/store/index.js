import { createStore } from 'vuex'
import getters from './getters'
import app from './modules/app.js'
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app
  },
  getters
})
