<template>
<div>


<!-- <div>
  <h1>Iteracion 5</h1>

  <div class="container" :class="colorBoolean ? `is-red`:`is-orange`" >
<h1>togleamos entre dos colores usando un operador ternario</h1>
<button @click="changeColorFunction()">click me to toogle color</button>
  </div>
</div> -->

<div>

    <h1>Ejercicio de prueba</h1>
    
    <div :class="tamañoLetra ? `small`:`big`">
        <p>Texto que cambia tamaño</p>
    </div>
    <button @click="fontSize()">Cambiar tamaño de letra</button>
    
</div>
</div>
</template>

<script setup>
import {ref} from "vue"

// const colorBoolean = ref (true)
// const changeColorFunction = () =>{
//     colorBoolean.value = !colorBoolean.value
//     console.log(colorBoolean.value)
// }

// ejercicio de prueba


// const fontsize= ()=>{
    
// }

const tamañoLetra = ref (true)
const fontSize = () =>{
    tamañoLetra.value = !tamañoLetra.value
    console.log(tamañoLetra.value)
}

</script>
<style scoped>
.container {
    height: 8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
}

.is-red{
    background: red;
}
.is-orange{
    background: orange;
}
.small{
    font-size: 10px;
}
.big{
    font-size: 30px;
}
</style>