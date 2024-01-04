
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
ProfessionalAppointmentType = "Grupal"
ProfessionalSessionCost = "14,999"
ProfessionalCurrency = "MEX"
ProfessionalAppointmentDuration = "50"
/>
<Card 
ProfessionalAttendantAndType="Psicoanalista online"
ProfessionalName="Martiniano Olivera"
ProfessionaIdentificationlProfessionalCard ="0303456"
ProfessionalApproach="Cognitivo conductual"
ProfessionalFirstExpertise = "Terapia de pareja"
ProfessionalSecondExpertise = "Vejez"
ProfessionalAppointmentType = "Individual"
ProfessionalSessionCost = "24,999"
ProfessionalCurrency = "ARS"
ProfessionalAppointmentDuration = "45"
/>
</template>


<style >

</style>