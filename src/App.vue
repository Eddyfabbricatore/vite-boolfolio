<script>
  import Header from './components/partials/Header.vue'
  export default{
    name: 'App',

    components: {
      Header
    }
  }

</script>

<template>
  <Header />
  
  <div class="main-wrapper">
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
</style>