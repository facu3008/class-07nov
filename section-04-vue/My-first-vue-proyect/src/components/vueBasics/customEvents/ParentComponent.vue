
<template>
    <div>
        <!-- // Ej. 1: Crean una carpeta dentro del components folder y creamos un componente ParentComponent.vue y otro componente ChildComponent.vue. El template de ChildComponent debe ser un botón con el texto 'Emit'. En el template de ParentComponent poned lo que queráis (un h1 p.ej.). Después debéis llamar al ChildComponent. EN EL SCRIPT DE PARENT creamos una función que tire una alerta de 'Emit realizado con éxito! :)'. Ahora lo que tenemos que hacer es que cuando le demos al botón de ChildComponent se llame la función de ParentComponent. -->


        <h1></h1>


        <Children 
        @saluda="alerta"
         
         />
        </div>
    
</template>
<script setup>
import Children from "./ChildrentComponent.vue"

const alerta = () => {
  alert("Emit realizado con exito!!");
};
const alerta2 = () => {
  alert("Emit2 realizado con exito!!");
};

</script>
<style scoped>

</style>
