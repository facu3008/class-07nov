<!-- aca adento es donde colocaremos nuestro JS -->

<template>
    <div>
        <h1> Paso a seguir</h1>


        <button @click="helloWorld"></button>
        <!-- <button onclick="helloWorld()">Click me</button> -->
        <!-- <p id="prueba"></p> -->

        <!-- <button onclick="myFunction()">Click me</button> -->

        <p id="demo"></p>

    </div>
</template>

<!-- aca adento es donde colocaremos nuestro JS -->
<script setup>
import { ref, reactive } from "vue";
import HelloWorld from "../HelloWorld.vue";

const helloWorld = () => {
    console.log("Hola Mundo!!!");
};


// const helloWorld= ref( ()=>{console.log("hello World")});

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }
</script>


<!-- aca adento es donde colocaremos nuestro css -->

<style>

</style>
