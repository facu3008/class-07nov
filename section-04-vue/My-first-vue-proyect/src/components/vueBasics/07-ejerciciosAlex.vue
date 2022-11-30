<template>
    <div>
        <!-- ejercicio uno -->
        <h1>My favourites movies</h1>
        <ol>
            
            <li v-for="(movie, index ) in movies" >
                {{index + 1}} - {{movie}} 
            </li>
            
        </ol>
        
        
        <!-- ejercicio dos -->
        
        <h1>My favourites things</h1>
        <!-- <ul>
            <li v-for="thing in favoriteThings" :key="thing">
                {{thing}} - 
            </li>
        </ul> -->
        <ul>
          <li v-for="(value, index) in favoriteThings" :key="index">
            {{ index }} : {{ value }}   
          </li>
        </ul>
        
        <!-- ejercicio tres -->
        
        <ul>
            <li v-for="(nombre, index) in students" :key="index">

                {{nombre}}

            </li>
        </ul>
        <H1 v-if="age > 18"></H1>


    </div>
</template>

<script setup>
import {ref, reactive} from "vue"

// ejercicio 1

const movies = reactive(["Sueños de libertad", "gladiador", "titanic", "avatar", "Buscando a Nemo"])


// ejercicio 2

const favoriteThings = reactive({
    favoriteFood: "Asado",
    favoriteDrink: "Gin Tonic",
    favoriteSport: "Basquet",
    favoriteCountry: "everyWhere",
    favoriteArraymethod: "all",

})

// ejercicio 3

const students = reactive ([

    {
        name: "Facu",
        age: 36,
        favoriteLanguages: ["JS", "PYTHON"]
    },
    {
    name: "Berta",
    age: 33,
    favoriteLanguages: ["HTML", "CSS"]
    },
    {
    name: "Santi",
    age: 30,
    favoriteLanguages: ["HTML", "CSS", "JS", "JAVA"]
    },
]
)

const show = ref(true)

</script>

<style>
</style>