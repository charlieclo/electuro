<template>
  <div>
    <HeaderComponent></HeaderComponent>
    <HomePage></HomePage>
    <!-- <div id="app">
      <img src="./assets/logo.png">
      <router-view/>
    </div> -->
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '@/components/main/HeaderComponent'
import HomePage from '@/pages/HomePage'
import FooterComponent from '@/components/main/FooterComponent'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    HomePage,
    FooterComponent,
  }
}
</script>

<style>
@import url("https://use.fontawesome.com/releases/v5.7.2/css/all.css");
@import 'assets/css/main.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
