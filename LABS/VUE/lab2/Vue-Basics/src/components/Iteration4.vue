<template>
    <div>

    
  <!-- Ejercicio 4 -->
  <h2>Ejercicio numero 4</h2>
        <hr>
        <br>
        
        <ul>
            <li v-for="(data, index) in dataPost" v-bind:key="index">
                
                 <h3>  {{data.title}} </h3>
                 <h4>{{data.description}}</h4>
                 <p>{{data.content}}</p>
                 <hr>

            </li>
        </ul>

        <br>
        <hr>

    </div>
</template>

<script setup>

import{reactive} from "vue"

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



</script>
<style></style>