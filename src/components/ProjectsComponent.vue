<script>
  import { store } from '../data/store'

  export default {
    name: 'ProjectsComponent',

    data(){
      return{
        store
      }
    }
  }
</script>

<template>
  <h1>I miei progetti</h1>

  <ul>
    <li v-for="project in store.projects" :key="project.id">
      <router-link :to="{name: 'project-detail', params:{slug: project.slug}}">{{ project.name }}</router-link>      
    </li>
  </ul>
</template>

<style lang="scss" scoped>
h1{
  margin-bottom: 20px;
}

a{
  color: white;
  text-decoration: none;

  &.active{
    font-weight: bold;
    color: yellow;
  }
  
  &:hover{
    text-decoration: underline;
  }
}
</style>