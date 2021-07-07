<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  beforeCreate() {
    if(!this.$session.get('user')){
      if(this.$router.currentRoute.name !== 'login-page'){
        this.$router.push({name: 'login-page'})
      }
    }else{
      if(this.$router.currentRoute.name !== 'testManagement'){
        this.$router.push({name: 'testManagement'})
      }
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  height: 100%;
}

#app {
  height: 100%;
}
</style>
