import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    //建议共用属性才添加到这里。
    count: 0

  },
  mutations: {

    addOne () {
      this.state.count++
    }
  },
  actions: {}
})
