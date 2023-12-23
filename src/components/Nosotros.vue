
<script>
export default {

}
</script>

<template>
  <div class="container">
    <div class="heroBanner">
        <div class="description">
                  <h1>Nuestra Misión</h1>
                <div>
                  <p>En Psych Services, estamos dedicados a proporcionar servicios de salud mental compasivos y basados en evidencia que empoderen a las personas  para alcanzar sus metas, Creemos en crear un espacio seguro y sin juicios para que nuestros clientes exploren sus problemas y trabajen hacia los resultados deseados. Nuestro equipo de psicólogos experimentados está comprometido en ayudarte a vivir una vida más felíz y satisfactoria.</p>
                </div>
        </div>
        
        <div class="theImage">
            <img src="https://10web-site.ai/19/wp-content/uploads/sites/21/2023/12/georgie-cobbs-bKjHgo_Lbpo-unsplash_0iWygN4l.webp" class="img-fluid" alt="...">
        </div>
      </div>
</div>

<div class="container">
    <div class="equipo">
        <h4 class="subTitle">Nuestro equipo</h4>
        <p>Conocé nuestro experimentado equipo de psicólogos</p>

        <div class="card-group">
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="https://psicologo-cordoba.com/wp-content/uploads/2022/06/psicologo-cordoba.jpg" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="nombre">Luciano Pagani</h5>
                            <p class="titulo">Psicólogo</p>
                            <p class="descripcion">Luciano se especializa en terapia de psico-análisis, con mas de 5 años de experiencia ayudando a personas con su salud mental.</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-3" style="max-width: 540px;">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src="https://psicologo-cordoba.com/wp-content/uploads/2022/06/psicologo-cordoba.jpg" class="img-fluid rounded-start" alt="...">
                        </div>
                        <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="nombre">Luciano Pagani</h5>
                            <p class="titulo">Psicólogo</p>
                            <p class="descripcion">Luciano se especializa en terapia de psico-análisis, con mas de 5 años de experiencia ayudando a personas con su salud mental.</p>
                        </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="container" style="text-align: center">
                <button type="button" class="btn  btn-sm titulo">Ver más</button>
            </div>

        
    </div>

</div>

    
</template>


<style scoped>
.card-group {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.titulo {
    color:#4CA079;
    margin-top: -8px;
    font-weight: bolder;
}

p {
    margin-top: revert;
}

.subTitle {
    font-size: 36px;
}

h1 {
    font-family: 'mainFont';/* Apply Poppins font */
    font-weight: bolder;
    font-size: 60px !important;
    margin-bottom: 35px !important;
}

p {
  font-family: 'pFont';
  font-weight: 200;
  font-size: 18px;
}
.p{
  text-align: left;
}

.heroBanner {
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 75px;
}

.description {
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    width: 53%;
    align-items: flex-start;
}

img{
  width: 100%;
  border-radius: 6px 6px 6px 6px;
}

.theImage {
  width: 40%; /* Set the initial width for desktop */
  
}

@media (max-width: 844px) {

    .card-group {
        display: flex;
        flex-direction: column;
    }

    .subTitle {
        font-size: 40px;
    }

  .description,
  .theImage {
    width: 100%; /* Full width on mobile */
  }
  h1 {
    font-family: 'mainFont';/* Apply Poppins font */
    font-weight: bolder;
    font-size: 40px !important;
    margin-bottom: 35px !important;
}
.description p, .description h1 {
  text-align: center;
}
.description{
  margin-left: 0;
  align-items: center;
}
}

</style>