<template>
  <div>

    <div>List</div>

    <ul>

      <li v-for="(index, item) in pageLists" :key="index">

        {{item.title}}-{{item.content}}
      </li>

    </ul>

  </div>

</template>

<script>

  import store from '@/store'

  export default {

    name: 'List',
    store,

    computed: {

      pageLists() {

        return store.state.lists
      }
    }
  }

</script>

<style scoped>

</style>
