<template>
  <div id="app">
    <loginForm/>
  </div>
</template>

<script>
import loginForm from './components/loginForm.vue'

export default {
  name: 'app',
  components: {
    loginForm,
  }
}
</script>


<style>
body {
  background: #DFE0E3;
  font-family: sans-serif;
}

#app {
  margin-top: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>



