<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <nav-bar />
  <TodoApp  />

  <parent-test />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import TodoApp from "@/components/TodoApp.vue";
import NavBar from "@/components/NavBar.vue";
import ParentTest from "@/components/ParentTest.vue";

export default {
  name: 'App',
  components: {
    ParentTest,
    TodoApp,
    NavBar,
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
