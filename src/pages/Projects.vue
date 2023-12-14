<script>
  import axios from 'axios'
  import { store } from '../data/store'
  import ProjectsComponent from '../components/ProjectsComponent.vue'
  import Navigator from '../components/partials/Navigator.vue'

  export default{
    name: 'Projects',

    components:{
      ProjectsComponent,
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
  <ProjectsComponent />
  <Navigator :links="links" @callApi="getApi" />
</template>

<style lang="scss">
</style>