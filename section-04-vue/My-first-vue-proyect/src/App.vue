<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MyFirstComponentVue from './components/vueBasics/MyFirstComponent.vue';
import TextDirectiveVue from './components/vueBasics/2-TextDirective.vue';
import HtmlDirective from './components/vueBasics/3-HtmlDirective.vue';
import ejercicioalexvue from './components/vueBasics/05-ejerciciosAlex.vue';
import ejercicioAlex2 from "./components/vueBasics/07-ejerciciosAlex.vue"
import props from "./components/vueBasics/propiedades.vue"
import ComputedProperties from "./components/vueBasics/8-computeProperties.vue";
import TwoWayData from "./components/vueBasics/9twowaydataexercise.vue"
</script>

<template>
  <div>

    <header>
      
      
      <div class="wrapper">
        <!-- <HelloWorld msg="Facu ens mi nombre!" /> -->
        <!-- <h2>Utilizando el props metodo</h2> -->
        
      </div>
    </header>
    
    <main>
      <!-- <MyFirstComponentVue/>
      <TextDirectiveVue/>
      <HtmlDirective/> -->
      <!-- <ejercicioalexvue/>  -->       
      <!-- <ejercicioAlex2/>> -->
      <!-- <props name="Nombre a mano"/>        -->
      <!-- <props />        -->
      <!-- <ComputedProperties/> -->
      <TwoWayData/>
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
