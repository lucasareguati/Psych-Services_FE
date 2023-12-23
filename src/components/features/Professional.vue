
<script>
import Card from '../shared/Card.vue'
export default {
    components: {
    Card,
  }
}
</script>

<template>
    <!-- ? Agregar v-for o similar a ngFor para que renderice la cantidad de profesionales que vengan del backend -->
<Card 
ProfessionalAttendantAndType="Psicoanalista online"
ProfessionalName="Luis Areguati"
ProfessionaIdentificationlProfessionalCard ="030345"
ProfessionalApproach="Emotivo"
ProfessionalFirstExpertise = "Adolescencia"
ProfessionalSecondExpertise = "Pubertad"
/>
<Card 
ProfessionalAttendantAndType="Psicoanalista online"
ProfessionalName="Martiniano Olivera"
ProfessionaIdentificationlProfessionalCard ="0303456"
ProfessionalApproach="Cognitivo conductual"
ProfessionalFirstExpertise = "Terapia de pareja"
ProfessionalSecondExpertise = "Vejez"
/>
</template>


<style >

</style>