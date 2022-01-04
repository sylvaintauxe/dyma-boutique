<template>
  <div id="app">
    <the-header></the-header>
    <div class="d-flex flex-column w-100">
    <component :is="page"></component>
    </div>   
  </div>
</template>

<script>
import {eventBus} from './main.js';
import TheHeader from "./components/TheHeader.vue";
import User from "./components/features/User/User.vue";
import Admin from "./components/features/Admin/Admin.vue";


export default {
  name: "App",
  components: {
    TheHeader,
    Admin,
    User,
  },
  data(){
    return{
      page: eventBus.page
    }
  },
  created(){
    eventBus.$on('update:page', (page) =>{
      this.page = page;
    })
  }
};
</script>

<style></style>
