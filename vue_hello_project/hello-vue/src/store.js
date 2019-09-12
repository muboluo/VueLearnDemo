import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    lists: [],

    // 建议共用属性才添加到这里。
    count: 0

  },
  mutations: {

    addOne() {
      this.state.count++
    },

    addItem(state, value) {

      state.lists.push(value)
      console.log('addItem' + value)
      console.log('addItem list ' + state.lists)
    }
  },
  actions: {}
})
