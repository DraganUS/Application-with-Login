<template>
<v-app dark>
  <v-layout  row wrap >
    <v-flex xs12 sm6>
      <v-date-picker
        v-model="picker"
        id='datePicker'
        color="green lighten-1"
        year-icon="mdi-calendar-blank"
        prev-icon="mdi-skip-previous"
        next-icon="mdi-skip-next"
      ></v-date-picker>
    </v-flex>
  </v-layout>
</v-app>
</template>
<script>
  export default {
    data () {
      return {
        picker: new Date().toISOString().substr(0, 10)
      }
    }
  }
  
</script>
<style scoped>
#datePicker{
  background: rgb(73, 73, 73);
}
</style>
