<template>
    <!-- <h1>Hola</h1>
    <h2>{{name}}</h2>
    <h2>{{age}}</h2>
    <h2>{{cityOfBirth}}</h2>
    <h2>{{Residencia}}</h2>
    <h2></h2> -->

    <nietoProp :name="name"/>
    <nietoProp />

</template>
<script setup>
import nietoProp from "../vueBasics/nietopropiedades.vue"


defineProps({
    name: {
        type: String,
        requided: true,
        default: "Ingrese su nombre"

    },
    age:{
        type: Number,
        requided: true,
        default: "0"
    },
    cityOfBirth:{
        type: String,
        requided: true,
        default: "Trelew"

    },
    Residencia:{
        type: String,
        requided: true,
        default: "Barcelona"
    }    
})
</script>
<style>
</style>