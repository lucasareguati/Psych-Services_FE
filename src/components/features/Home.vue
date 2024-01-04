<script>
export default {

}
</script>

<template>
<div class="container">
    <div class="heroBanner">
        <div class="description">
                  <h1>Potenciando el Bienestar Mental</h1>
                <div>
                  <p>En Psych Services, estamos dedicados a proportcionar servicios expertos de salud mental. Nuestros psicólogos altamente capacitados ofrecen sesiones personalizadas para abordar sus necesidades y procupaciones únicas.</p>
                </div>
                <button type="button" class="btn btnColorPalette btn-lg w-100">Ver todos los servicios</button>
        </div>
        
        <div class="theImage">
            <img src="https://images.unsplash.com/photo-1611255550543-b5ecb01dfddc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid" alt="...">
        </div>
      </div>
</div>
    
</template>

<style>

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

.btnColorPalette{
  background-color: #9a9a92 !important;
  color: white !important ;
  }
.btnColorPalette:hover{
  background-color: #6c94b4 !important ;
  box-shadow: grey 0px 0px 10px;
}

@media (max-width: 450px) {
  .btnColorPalette{
    margin-bottom: 20px;
  }
}

.heroBanner {
  display: flex;
  flex-direction: row;
  align-content: center;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 75px;
  /*margin: 0 auto; /* Center the heroBanner horizontally */
}

.description {
    display: flex;
    justify-content: flex-start;
    flex-flow: column;
    width: 53%;
    /* align-content: space-around; */
    align-items: flex-start;
}

img{
  width: 100%;
  border-radius: 6px 6px 6px 6px;
}

.theImage {
  width: 40%; /* Set the initial width for desktop */
  
}

@media (max-width: 768px) {
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