<!-- aca adento es donde colocaremos nuestro JS -->

<template>
    <div>

        <!-- <h2> naci en la ciudad de{{ciudad}} hace 36 años</h2> -->
        <h1>My small biography</h1>
        <p>Hola mi nombre es {{myInfo.name}} {{myInfo.surname}}, tengo {{myInfo.edad}} y mis hobbies son {{myInfo.hobbies[0]}}, {{myInfo.hobbies[1]}} y {{myInfo.hobbies[2]}}. Mi pelicula preferida es {{pelipreferida}} y la vi {{peliVista}}</p>
        
        
    </div>
<div v-text="" ></div>
</template>

<!-- aca adento es donde colocaremos nuestro JS -->


<script setup>
import {ref, reactive } from 'vue';

// Declaramos una variable que contenga con el metodo reactive vuestros nombres, edad, fecha de nacimiento y un array de vuestros hobbies. Los plasmamos dentro del template en una mini biografia.
const myInfo = reactive ({
    name: "Facundo",
    surname: "Moya",
    edad: 36,
    dob: "30/08/1986",
    hobbies: [
        "correr", 
        "movies",
        "cocinar",
        "equitacion"
    ],
})
// Después generamos tres variables de tipo ref. Una con vuestra peli preferida, la otra con vuestra comida preferida y la tercera con la cantidad de veces que habéis visto vuestra película preferida. Estas también las integráis en el texto de la biografia usando la moustache syntax.

const pelipreferida = ref("sueños de libertad")
const comida = ref("milanesa")
const peliVista = ref(10)




</script>
<!-- aca adento es donde colocaremos nuestro css -->

<style></style>
