<!-- aca adento es donde colocaremos nuestro JS -->

<template>
    <div>
        <!-- primer iteracion -->
        <h1> Creo y muestro componente en homeScreen</h1>
        
        <!-- segunda iteracion -->
        
        <h2>{{segundaIteracion}}</h2>
        
        
        <!-- tercera iteracion -->
        
        <!-- short version -->
        <button @click="helloWorld">Imprima en consola al tocar</button>
        <button @click="helloWorld()">Funcion con parentesis</button>

        <!-- long version -->
        <button v-on:click="helloWorld()">Long Version</button>
        <!-- <button onclick="helloWorld()">Click me</button> -->
        <!-- <p id="prueba"></p> -->

        <!-- <button onclick="myFunction()">Click me</button> -->

        <p id="demo"></p>

    </div>
</template>


<script setup>
import { ref, reactive } from "vue";
// import HelloWorld from "../HelloWorld.vue";

const segundaIteracion = ref("Este texto corresponde a la segunda iteraciond del ejercicio")

// Funcion flecha                            
// const helloWorld = () => {
//     console.log("Hola Mundo!!!");
// };
// Funcion clasica
function helloWorld(){
    console.log("Hola")
}


</script>


<!-- aca adento es donde colocaremos nuestro css -->

<style>

</style>
