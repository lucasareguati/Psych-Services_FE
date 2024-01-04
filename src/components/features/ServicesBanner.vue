<!-- eslint-disable vue/require-v-for-key -->
<!-- eslint-disable vue/require-v-for-key -->

<script>
export default {
    data() {
        return {
            title: 'Nuestros Servicios',
            services: [
                {
                    id: 0,
                    imgUrl: 'https://images.unsplash.com/photo-1592947945242-69312358628b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    name: 'Evaluación de la Salud Mental',
                    description: 'Nuestras evaluaciones de salud mental son realizadas por psicólogos experimentados que utilizan herramientas y técnicas basadas en evidencia para evaluar sus preocupaciones de salud mental.'
                },
                {
                    id: 1,
                    imgUrl: 'https://images.unsplash.com/photo-1592947945242-69312358628b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    name: 'Sesión de Terapia',
                    description: 'Nuestras sesiones de terapia están diseñadas específicamente para satisfacer sus necesidades y metas individuales, ofreciendo un entorno seguro y de apoyo para superar desafíos y lograr resultados positivos'
                },
                {
                    id: 2,
                    imgUrl: 'https://images.unsplash.com/photo-1592947945242-69312358628b?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                    name: 'Llamada de consulta',
                    description: 'Nuestra llamada de consulta gratuita es tu oportunidad para hablar con un psicólogo experimentado que puede ayudarte a evaluar tus necesidades y sentirte más cómodo/a buscando...'
                }
            ]
        }
    }
}
</script>

<template>
<div class="container">
    <div class="header">
        <h4 class="subTitle">{{title}}</h4>
        <button type="button" class="btn btnColorPalette btn-lg">Ver todos los servicios</button>
    </div>

    <div class="card-deck header" >
        <div v-for="service in services" :key="service.id" class="card border-light" style="margin: 9px">
            <img class="card-img-top" :src="service.imgUrl" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{service.name}}</h5>
                <p class="card-text">{{service.description}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<style>

.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 25px
}

.subTitle {
    font-size: 40px;
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
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
    .header {
        flex-direction: column;
    }
}

</style>