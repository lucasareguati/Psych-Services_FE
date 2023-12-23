
<script>
export default {

}
</script>

<template>
<div class="container">

  <div class="left-part">
    <h1>
      ¿Tienes una pregunta?
    </h1>
    <h4>
      Por favor sentite libre de contactarnos, esperamos <br> con ansias saber de vos.
    </h4>
    <h2 class="emailTitle">
      Envianos un correo electrónico
    </h2>
    <h4 class="email">
      contacto@psychservices.com
    </h4>
  </div>

<div class="contact-form">
    <form class="row g-3">
        <div class="col-12">
            <input type="text" class="form-control" id="nameInput" placeholder="Nombre" >
        </div>

        <div class="col-12">
            <input type="email" class="form-control" id="emailInput" placeholder="Correo Electrónico">
        </div>

        <div class="col-12">
            <input type="text" class="form-control" id="inputAddress" placeholder="Asunto">
        </div>

        <div class="col-12">
            <textarea class="form-control" id="messageTextArea" rows="5" placeholder="Tu mensaje"></textarea>
        </div>

        <div class="col-12">
            <button type="button" class="btn btnColorPalette btn-lg w-100">Enviar mensaje</button>
        </div>
    </form>
</div>

</div>

</template>


<style scoped>

.email {
  margin-top: revert;
}

.emailTitle {
      margin-top: revert;
}

.container{
  /* height: 100vh; */
}

h4 {
  font-family: 'pFont';
  font-weight: 200;
  font-size: 18px;
}
@media (min-width: 992px) {
  .container{
      display: grid;
      margin-top: 85px;
      grid-template-columns: repeat(2, 50%);
  }  
}

@media (max-width: 450px) {
  .container{
      display: grid;
      margin-top: 50px;
      grid-template-columns: 100%
  }  
}


</style>