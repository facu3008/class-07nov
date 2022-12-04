<template>
    <div>

    <input type="text" v-model="nombre.name">   
    </div>
</template>
<script setup>
import {ref} from "vue"

const nombre = ref({
    name:""
})
console.log(nombre.name)
</script>
<style scoped>

</style>