<template>
  <div class="container">
    <h1>Welcome to your first Web Component</h1>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
