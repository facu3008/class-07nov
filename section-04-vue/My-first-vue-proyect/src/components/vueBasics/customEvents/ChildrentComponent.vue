<template>
    <div>

        <h1>HOlas</h1>
        <!-- /// EJERCICIO 001 - CUSTOM EVENT -->
        <!-- // Ej. 1: Crean una carpeta dentro del components folder y creamos un componente ParentComponent.vue y otro componente ChildComponent.vue. El template de ChildComponent debe ser un botón con el texto 'Emit'. En el template de ParentComponent poned lo que queráis (un h1 p.ej.). Después debéis llamar al ChildComponent. EN EL SCRIPT DE PARENT creamos una función que tire una alerta de 'Emit realizado con éxito! :)'. Ahora lo que tenemos que hacer es que cuando le demos al botón de ChildComponent se llame la función de ParentComponent. -->
        <button @click="$emit('saluda', 'despide')">Emit</button>

</div>
</template>
<script setup>
const emit = defineEmits(["saluda", "despide"]);

</script>
<style scoped>

</style>
