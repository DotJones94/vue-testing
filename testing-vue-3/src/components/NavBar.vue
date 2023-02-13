<template>
  <nav>
    <a href="" id="home">Home</a>
    <a href="" v-if="isLoggedIn" id="profile">My Profile</a>
  </nav>
</template>
<script>
export default {
  name: "NavBar",
  data(){
    return{ isLoggedIn: false, }
  }
}
</script>

<style scoped>

</style>