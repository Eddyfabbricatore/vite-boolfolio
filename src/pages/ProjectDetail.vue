<script>
  import axios from 'axios';
  import { store } from '../data/store';

  export default{
    name: 'ProjectDetail',

    data(){
      return{
        project: {
          technology: {}
        }
      }
    },

    methods:{
      getProject(slug){
        axios.get(store.apiUrl + 'projects/get-project/' + slug)
              .then(res => {
                this.project = res.data;
              })
      }
    },

    mounted(){
      this.getProject(this.$route.params.slug);
    }
  }
</script>

<template>
  <h1>{{ project.name }}</h1>
  <em>{{ project.date }}</em>
  <p>{{ project.technologies?.[0].name || ' - ' }}</p>
</template>

<style lang="scss">
</style>