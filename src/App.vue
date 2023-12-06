<script>
  import axios from 'axios'
  import { store } from './data/store'
  import BlogComponent from './components/BlogComponent.vue'
  import Navigator from './components/partials/Navigator.vue'

  export default{
    name: 'App',

    components:{
      BlogComponent,
      Navigator
    },

    data(){
      return{
        links: []
      }
    },

    methods: {
      getApi(endpoint){
        axios.get(endpoint)
          .then(results => {
            store.projects = results.data.data;
            this.links = results.data.links;
        })
      }
    },

    mounted(){
      this.getApi(store.apiUrl + 'projects');
    }
  }
</script>

<template>
  <div class="container">
    <BlogComponent />
    <Navigator :links="links" @callApi="getApi" />
  </div>
</template>

<style lang="scss">
</style>