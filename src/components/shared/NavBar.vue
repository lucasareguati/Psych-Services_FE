
<script>
export default {
    data() {
        return {
            title: 'PSYCH SERVICES'
        }
    },
    computed:{
      getUrl(){
        return function (urlSelected){
          return window.location.pathname === urlSelected
        }
      }
    }
}
</script>

<template>
<nav class="navbar navbar-expand-lg">
  <div class="container">
    <div class="container Navbar ">
    <a class="navbar-brand m-l" href="/">{{title}}</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="container">
    <div class="" id="navbarNavDropdown">
      <ul class="navbar-nav" >
        <li class="nav-item">
          <a class="nav-link" :class="{active: getUrl('/profesionales')}" href="/profesionales">Profesionales</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{active: getUrl('/nosotros')}" href="/nosotros">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" :class="{active: getUrl('/contacto')}" href="/contacto">Contacto</a>
        </li>
        
      </ul>
      </div>
    </div>
  </div>
</nav>
</template>


<style>
.ml-auto {
  margin-right: 30%; /* Adjust this percentage as needed */
}

nav.navbar{
  background-color: #ffffff;
  color: #fff;
}

@media (min-width: 992px) {
  nav.navbar{
    box-shadow: grey 0px 0px 5px;
  }
}

@media (max-width: 450px) {
  nav.navbar{
    box-shadow: grey 0px 0px 10px;
    border-radius: 10px;
  }
}

.navbar-nav{
  justify-content: flex-end;
}

.Navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.m-r {
    margin-right: 16%;
}
</style>