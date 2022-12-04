<template>
    
    <h3>Te gusta la pizza?</h3>
    <input type="text" v-model="answer" />
    <p>{{answer}}</p>

</template>

<script setup>
import {ref, reactive, watch} from "vue";

import jsonAnswers from "./docJson.json"
const answer = ref("");

watch(answer, async (newAnswer) => {
    if (newAnswer === "yes") {
        try {
            const response = await fetch (`./docJson.json`);
            answer.value = (await response.json()).return;
        } catch (error) {
        console.log("Error");
        }
    }
})

</script>