import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
var store = new vuex.Store({
  state: {
    list: []
  },
  mutations: {
    a3 (state, k) {
      state.list.unshift()
    }
  }
})
export default store
