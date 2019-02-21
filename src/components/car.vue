<template>
<div id='cards'>

    <div class="" v-for="(value, index) in info.data" >
                 <p>{{ value.title }}</p>
                 <img v-bind:src="value.img" alt="" >
                 <p>{{ value.description }}</p>
              </div>

</div>
</template>
  <script>
export default {
  data(){
    return {
        info: ''
    }
  },
  mounted(){
    axios
    .get('https://api.myjson.com/bins/15xkc6')
    .then(response => (this.info = response))   

    
  }
  
}
</script>

<style scoped>
div#cards{
  height: 500px;
  width: 100%;
  background-color: bisque;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
