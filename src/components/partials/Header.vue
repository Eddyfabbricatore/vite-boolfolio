<script>
  export default {

  }
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">Chi siamo</router-link>
        </li>
        <li>
          <router-link :to="{name: 'projects'}">Progetti</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">Contatti</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss">
header{
  position: fixed;
  width: 100%;
  text-align: center;
  padding: 20px;

  ul{
    list-style: none;

    li{
      margin: 0 10px;
      display: inline-block;
    }

    a{
      color: white;
      text-decoration: none;
      text-transform: uppercase;

      &.active{
        font-weight: bold;
        color: yellow;
      }
      
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>