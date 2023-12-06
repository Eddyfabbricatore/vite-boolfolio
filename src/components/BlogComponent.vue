<script>
  import { store } from '../data/store'

  export default {
    name: 'BlogComponent',

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
      <p>{{ project.name }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
h1{
  margin-bottom: 20px;
}
</style>