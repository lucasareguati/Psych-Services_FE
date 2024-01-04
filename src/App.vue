<script setup la
  components: { NavBar, Footer },ng="ts">
import NavBar from './components/shared/NavBar.vue';
import Footer from './components/shared/Footer.vue';


</script>

<template>
  <NavBar id="navbar"/>
  <RouterView id="routerview"/>
  <Footer id="footer"/>
</template>

<style scoped>

</style>
