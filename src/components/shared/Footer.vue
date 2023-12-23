<template>
  
<footer class="pt-3 mt-4" :class="{ isContactRoute: getRoute }" >
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Ir a inicio</a></li>
      <li class="nav-item"><a href="/profesionales" class="nav-link px-2 text-body-secondary">Profesionales</a></li>
      <li class="nav-item"><a href="/nosotros" class="nav-link px-2 text-body-secondary">Nosotros</a></li>
      <li class="nav-item"><a href="/contacto" class="nav-link px-2 text-body-secondary">Contacto</a></li>
    </ul>
    <p class="text-center text-body-secondary" >© 2023 Psych Services</p>
  </footer>
</template>

<script>
export default {
  computed: {
    getRoute() {
      return window.location.pathname === '/contacto';
    }
  }
}
</script>

<style>

.isContactRoute{
  position: fixed;
  bottom: 0;
  width: 100%;
}

</style>