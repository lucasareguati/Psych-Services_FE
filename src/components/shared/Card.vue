
<script>
export default {
    props: {
    ProfessionalAttendantAndType: String,
    ProfessionalName: String,
    ProfessionaIdentificationlProfessionalCard: Number,
    ProfessionalApproach: String, 
    ProfessionalFirstExpertise: String,
    ProfessionalSecondExpertise: String,
    ProfessionalAppointmentType: String,
    ProfessionalSessionCost: Number,
    ProfessionalCurrency: String,
    ProfessionalAppointmentDuration: Number
  },
}
</script>

<template>
<div class="professionalCard">
    <div class="professionalCard--imageContainer">
        <img class="professionalCard--imageContainer__professional" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" >
        <!--? para agregar en un futuro. Acá iría la bandera con la nacionalidad del profesional, para un reconocimiento más facil. <img class="professionalCard--imageContainer__countryFlag" src=""> -->
    </div>
    <div class="professionalCard--professionalTitle">
        <h5>
            {{ProfessionalAttendantAndType}}
        </h5>    
    </div>
    <div class="professionalCard--professionalName">
        <h3>
            {{ProfessionalName}}
        </h3>    
    </div>
    <div class="professionalCard--identificationprofessionalCard">
        <p>
            {{ProfessionaIdentificationlProfessionalCard}}
        </p>    
    </div>
    <div class="professionalCard--approach">
        <p>
            {{ProfessionalApproach}}
        </p>
    </div>
    <div class="professionalCard--expertiseBadges">
        <span>
            {{ ProfessionalFirstExpertise }}
        </span>
        <span>
            {{ ProfessionalSecondExpertise }}
        </span>
    </div>
    <div class="dFlex--spaceBetween__xAxis">
        <div class="professionalCard--appointmentType">
            <span>
                Terapia  <b> {{ ProfessionalAppointmentType }} </b> - {{ ProfessionalAppointmentDuration }} min.
            </span>
        </div>
        <div class="professionalCard--sessionCost">
            <span>
                <b> ${{ ProfessionalSessionCost }} {{ ProfessionalCurrency }} </b>
            </span>
        </div>
    </div>
</div>

</template>


<style >
.professionalCard {
    min-width: 500px;
    border: 1px solid rgba(160, 160, 160, .5);
    box-shadow: 10px 10px 10px rgba(160, 160, 160, .5);
    border-radius: 20px;
    margin: 20px 0px 0px 20px;
    padding: 20px 0px 0px 20px;
    width: 50%;
    display: grid !important;
    grid-template-columns: 20% 80%;
    grid-template-rows: repeat(6, 16%);
    grid-template-areas: 
    "professionalImg professionalTitle"
    "professionalImg professionalName"
    ". professionalIdentificationprofessionalCard"
    ". professionalApproach"
    "professionalBadges professionalBadges"
    "professionalAppointmentTypeAndCost professionalAppointmentTypeAndCost"
    /* "professionalAppointmentType professionalCurrency"; */
}
.professionalCard--imageContainer__professional {
    width: 100px;
    height: 100px;
    border-radius: 100px;
    grid-area: professionalImg;
}
.professionalCard--professionalTitle {
    grid-area: professionalTitle;
    color: #999;
}
.professionalCard--professionalName {
    grid-area: professionalName;
}
.professionalCard--identificationprofessionalCard {
    grid-area: professionalIdentificationprofessionalCard;
}
.professionalCard--approach {
    grid-area: professionalApproach;
    p {
        b {
            font-weight: 900;
        }
    }
}
.professionalCard--expertiseBadges {
    grid-area: professionalBadges;
    span {
        color: #000;
        background-color: #6ff1b5;
        border-radius: 10px;
        display: inline-block;
        width: 150px;
        text-align: center;
        margin: 0 5px;
    }
}
.professionalCard--identificationprofessionalCard {
    p {
        b {
            font-weight: 900;
        }
    }
}
.professionalCard--appointmentType {
    /* grid-area: professionalAppointmentType; */
}
.professionalCard--sessionCost {
    /* grid-area: professionalCurrency; */
}
.dFlex--spaceBetween__xAxis{
    grid-area: professionalAppointmentTypeAndCost;
    display: flex;
    justify-content: space-between;
    padding: 0 30px 0 10px;
}
</style>