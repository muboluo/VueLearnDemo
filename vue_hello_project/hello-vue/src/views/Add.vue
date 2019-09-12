<template>
  <div>
    <p>标题</p>
    <input type="text" v-model="title">
    <p>内容</p>
    <input type="text" v-model="content">

    <button type="button" @click="add()">添加</button>
  </div>

</template>

<script>

  import store from '@/store'

  export default {

    store,

    name: 'Add',

    data() {

      return {

        title: '',
        content: ''
      }
    },
    methods: {

      add() {
        console.log('add :' + this.title + this.content)
        store.commit('addItem', { title: this.title, content: this.content })

        this.title = ''
        this.content = ''
      }
    }

  }

</script>

<style scoped>

</style>
