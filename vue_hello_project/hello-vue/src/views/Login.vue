<template>
    <div>

      <button type="button" @click="reg()">登录</button>
      <button type="button">注册</button>
    </div>

</template>

<script>

  export default {

    name: 'Login',



    methods:{

      reg(){
        this.$router.push('/Home/List')
      }
    }


  }

</script>

<style scoped>

</style>
