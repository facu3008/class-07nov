<template>
    <div>

        <nav>
            <h1> NavBar Ejercicio1</h1>
        </nav>
        
        
        <hr>
        <br>
        <!-- Ejercicio 2 -->

        <h2>Ejercicio numero 2</h2>
        <hr>
        <br>
        <h3>Expresion simple</h3>
        <p>{{(number1 +number2)}}</p>
        
        <h3>Resultado de una funcion</h3>
        <p> La suma de {{a}} + {{b}} es igual a {{suma(a,b)}}</p>
        
        <h3>Pasando un string por medio de una funcion</h3>
        <p>string</p>

        <br>
        <hr>
        <!-- Ejercicio 3 -->
        <h2>Ejercicio numero 3</h2>
        <hr>
        <br>
        <p v-if="dataBolean"> El dato ingresado es {{dataBolean}}</p>
        <p v-else> El dato ingresado es {{dataBolean}}</p>
        
        <p v-show="dataBolean"> El dato ingresado es {{dataBolean}} </p>
        
        
        <br>
        <hr>
        <!-- Ejercicio 4 -->
        <h2>Ejercicio numero 4</h2>
        <hr>
        <br>
        
        <ul>
            <li v-for="(data, index) in dataPost" v-bind:key="index">
                
                 <h3>  {{data.title}} </h3>
                 <h4>{{data.description}}</h4>
                 <p>{{data.content}}</p>
                

            </li>
        </ul>

        <br>
        <hr>
        <!-- Ejercicio 4 -->
        <h2>Ejercicio numero 5</h2>
        <hr>
        <br>
        <button @click="changeColor">click para ver magia</button>
        <hr>
        <br>


        <footer>
            <h1> This is the footer of my webpage</h1>
        </footer>
    </div>
</template>

<script setup>
import {ref, reactive} from "vue"

// ejercicio dos
const number1 = ref(3)

const number2 = ref(6)

const a = ref(2)
const b = ref(4)
function suma(a,b){
    return a + b
}

// string=()=>{
//     return "Un string pasado como funcion"
// }

// ejercicio tres

const dataBolean = ref(false)

// ejercicio cuatro

const dataPost = reactive([
    {
        title: "The Cheesecake Factory" ,
        description: "Use humor and great photos",
        content: "The Cheesecake Factory is an American chain of restaurants, localized around the world. If you’re not familiar with it, you may recognize the name from the hit series The Big Bang Theory. They have a large following on Facebook and regularly post about food that’s on their menu. These posts get a lot of engagement, due to the great images used and the funny text accompanying them",
    },
    {
        title: "Tony’s Chocolonely" ,
        description: "Show people what’s happening",
        content: "Tony Chocolonely is a Dutch company that sells chocolate. Their chocolate bars are quite popular and their mission is to make chocolate 100% slave-free. As they are opinionated, which fits their mission, they often get a lot of engagement on their social posts",
    },
    {
        title: "The Dogs House" ,
        description: "Use humor and great photos",
        content: "The Cheesecake Factory is an American chain of restaurants, localized around the world. If you’re not familiar with it, you may recognize the name from the hit series The Big Bang Theory. They have a large following on Facebook and regularly post about food that’s on their menu. These posts get a lot of engagement, due to the great images used and the funny text accompanying them",
    },

])

// ejercicio cinco

// function changeColor = () {}


</script>

<style scoped>

</style>