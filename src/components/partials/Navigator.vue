<script>
  import { store } from '../../data/store'

  export default {
    name: 'Navigator',

    props:{
      links: Array
    },

    data(){
      return{
        store
      }
    },

    methods:{
      callApi(linkUrl){
        this.$emit('callApi', linkUrl);
      }
    }
  }
</script>

<template>
  <div class="nav-wrapper">
    <button v-for="link in links" :key="link.label" v-html="link.label" :disabled="link.active || !link.url" @click="callApi(link.url)"></button>
</div>
</template>

<style lang="scss" scoped>
.nav-wrapper{
  margin-top: 20px;
  text-align: center;

  button{
    margin: 5px;
    padding: 3px 7px;
  }
}
</style>