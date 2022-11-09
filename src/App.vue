<template>
  <div id="app">
    <NavBar/>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">

@import "@/scss/colors";
@import "@/scss/variables";

#app {

  font-family: $fontFamily;
  background: $colorGray;
  background-size: cover;

  margin-top: 49px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 49px);
}

</style>
