<template>
    <div id="general">
        <div class="form-class-container">
            <h1>Form Class</h1>

            <!-- Montamos un formulario para ir al primavera sound. Vamos a incluirle un input type text para vuestro nombre y un input type email para el email. Vamos incorporar un select que nos permita escoger entre cinco artistas para ver en el festival. Después hacemos inputs separados que reciban propiedades booleanicas y que respondan a estas preguntas:
Consumes alcohol o drogas? (si/no)
Vas a venir vestid@ de negro? (si/no)
Tienes más de 21 años? (si/no)
Vienes con un grupo de más de 2 personas? (si/no)
Por ultimo hacemos input textarea para sugerencias de mejora del festival.
Cuando se envíe el formulario imprimiremos la info que se ha mandado con una alerta en el browser. -->
<form @submit.prevent="submitForm">
    <div id="form-v-model-visibilidad">
        <pre>{{ JSON.stringify(formValues, null, 1) }}</pre>
      </div>
    <div id="user-name">
    <label for="name">Enter Name</label>
    <input type="text" autocomplete="off" id="name" v-model="formValues.name"/>
    </div>
    <div id="user-email">
    <label for="email">Enter Email</label>
    <input type="email" autocomplete="off" id="email" v-model="formValues.email"/>
    </div>
    <div id="artist-preference">
        <label for="artist">Que artistas te gustaría ver?</label>
        <select name="artist" id="artist" multiple v-model="formValues.artist">

        <option >Select your artist</option>
        <option value="artic monkeys">Arctic Monkeys</option>
        <option value="travis">Travis Scott</option>
        <option value="björk">Björk</option>
        <option value="Lorde">Lorde</option>
        <option value="hernan cataneo">Hernan Cattaneo</option>
        
        </select>
    </div>
    <div id="preferences">
        <div id="alcohol">
            <label>Consumes alcohol o drogas?</label>
            <div>
                <input type="radio" id="1" value="true" v-model="formValues.alcohol">
                <label for="1">Si</label>
                <br>
                <input type="radio" id="false" value="false" v-model="formValues.alcohol">
                <label for="false">No</label>
            </div>
        </div>
        <!-- <div id="alcohol">
            <label>Consumes alcohol o drogas?</label>
            <div>
                <input type="radio" id="1" value="true" v-model="formValues.preferences[0]">
                <label for="1">Si</label>
                <br>
                <input type="radio" id="false" value="false" v-model="formValues.preferences[0]">
                <label for="false">No</label>
            </div>
        </div> -->
        <div id="vestimenta">
            <label>Vas a venir vestid@ de negro?</label>
            <div>
                <input type="radio" id="true" value="true" v-model="formValues.vestimenta">
                <label for="1">Si</label>
                <br>
                <input type="radio" id="false" value="false" v-model="formValues.vestimenta">
                <label for="false">No</label>
            </div>
        </div>
        <!-- <div id="vestimenta">
            <label>Vas a venir vestid@ de negro?</label>
            <div>
                <input type="radio" id="true" value="true" v-model="formValues.preferences[1]">
                <label for="1">Si</label>
                <br>
                <input type="radio" id="false" value="false" v-model="formValues.preferences[1]">
                <label for="false">No</label>
            </div>
        </div> -->
        <div id="age">

            <label>Tienes más de 21 años?</label>
            <div>
                <input type="radio" id="true" value="true" v-model="formValues.age">
                <label for="1">Si</label>
                <br>
                <input type="radio" id="false" value="false" v-model="formValues.age">
                <label for="false">No</label>
            </div>
        </div>
        <div id="cantidad">
            
            <label>Vienes con un grupo de más de 2 personas?</label>
            <div>
                <input type="radio" id="true" value="true" v-model="formValues.cantidad">
                <label for="1">Si</label>
                <br>
                <input type="radio" id="false" value="false" v-model="formValues.cantidad">
                <label for="false">No</label>
            </div>
        </div>
          <div id="sugerencias">
          <label for="sugerencias">Tiene sugerencias?:</label>
          <br>
          <textarea
            name="sugerencias"
            id="sugerencias"
            cols="30"
            rows="10"
            placeholder="Ingrese aqui sus comenterarios..."
            v-model.trim.lazy="formValues.sugerencias"
            
          ></textarea>
        </div>
        <!-- v-model.trim.lazy="formValues.sugestions" -->
        


    </div>



    <input type="submit" value="Submit Form" />
</form>

        </div>


    </div>
</template>
<script setup>
import { ref, reactive } from "vue";

const formValues = reactive({
  name: "",
  email: "",
  artist: [],

//   preferences:  ["alcohol", "vestimenta"],
alcohol: true,
vestimenta: true,
  age: false,
  cantidad: true,
  sugerencias: ""

//   jobLocation: [],
//   remoteWork: false,
//   skillSet: [],
//   yearsOfExperience: "",
//   profileAge: null,
});

function submitForm() {
  console.log("Form Values", formValues);
  alert(`name: ${formValues.name} -
    email: ${formValues.email} 
    artistas: ${formValues.artist} 
    bebes alcohol?: ${formValues.alcohol?"Si":"No"} 
    vienes de negro?: ${formValues.vestimenta?"Si":"No"} 
    Eres mayor de edad? ${formValues.age?"Si":"No"} 
    Son mas de dos personas?:  ${formValues.cantidad?"Si":"No"}  comentarios: 
    "${formValues.sugerencias}"   `);
}
// function submitForm() {
//   console.log("Form Values", formValues);
//   alert(`name: ${formValues.name} - email: ${formValues.email} - artistas: ${formValues.artist} -  bebes alcohol?: ${formValues.preferences[0]?"Si":"No"} - vienes de negro?: ${formValues.preferences[1]?"Si":"No"} - Eres mayor de edad? ${formValues.age?"Si":"No"} - Son mas de dos personas?:  ${formValues.cantidad?"Si":"No"} - comentarios: "${formValues.sugerencias}"   `);
// }

</script>

<style scoped>
.form-class-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: justify;
}

#preferences{
    display: flex;
    flex-direction: column;
}

</style>