<template>

  <div class="info">

    <h1> this is info page</h1>

    <div>

      <button type="button" @click="logPercent()">添加 </button>

    </div>

  </div>

</template>

<script>

  import store from '@/store'

  export default {

    store,

    name: 'Info',
    methods: {

      logPercent() {

        console.log('add event')
        store.commit('addOne')
      }
    },

  }

</script>
