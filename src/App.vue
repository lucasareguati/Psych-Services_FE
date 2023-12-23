<script setup la
  components: { NavBar, Footer },ng="ts">
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';


</script>

<template>
  <NavBar id="navbar"/>
  <RouterView id="routerview"/>
  <Footer id="footer"/>
</template>

<style scoped>

</style>
