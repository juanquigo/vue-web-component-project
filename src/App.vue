<template>
  <div id="app">
    <Welcome msg="Welcome to La Haus" />
  </div>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'App',
  components: {
    Welcome
  }
}
</script>