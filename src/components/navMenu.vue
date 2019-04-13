<template>
  <header class="header">
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="register.php" target="_blank">Register</a>
          </li>
          <li >
            <i class="fas fa-sign-in-alt" @click="modalShow"> LOG IN</i>
          </li>
        </ul>
      </nav>
    </div>
     <div id="modal" v-bind:style="modalDisplay">
    <form action="">
      <i class="fas fa-times" v-on:click = "modalNone"></i>
      <ul>
        <li><input type="email" placeholder="email" name="email" ></li>
        <li><input type="password" placeholder="pass" name="pass" ></li>
      </ul>     
      <button class="btnSign">LOG IN</button>
    </form>
  </div>
  </header>      
</template>
  <script>
export default {
  data(){
    return {
      modalDisplay: "display:visible",
    }
  },methods: {
    modalNone : function (event) {
      return this.modalDisplay ="display:none";
    },
    modalShow: function (event) {
      return this.modalDisplay ="";
    }
  },
  
}
</script>

<style scoped>
html, body{
      height: 100%;
      width: 100%;
  }

@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600);

* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}

body {
  font-family:"Open Sans", Helvetica, Arial, sans-serif;
  font-weight:300;
  font-size: 12px;
  line-height:30px;
  color:#777;
  background: #fce273;
}
li.errors {color: #ff3a00;}
div.container{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
header{
  padding: 15px;
  z-index: 200;
  background: #232020;
  position: relative;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}
header a{
  margin: 0 30px;
}
header div nav ul li a {
  text-decoration: none;
  color: #fff;
}
header div nav ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
}
 div.regSuccess{
 display: none;
}
form ul{
  list-style-type: none;
}
h1{
  padding: 20px;
}
i.fa-sign-out-alt,i.fa-sign-in-alt{
  cursor: pointer;
  color: rgb(214, 214, 214);
  font-size: 20px;
}
 i.fa-sign-out-alt:hover,i.fa-sign-in-alt:hover{
   font-size: 21px;
   color: #fff;
}
#modal {
  display: none;
  height:100vh;
  width: 100vw;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000e6;
  padding: 0;
}
#modal form {
  height: auto;
  padding: 80px 10px;
  width: 80%;
  background: #fff;
  border-radius: 5px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
}
#modal form ul {
height: 100%;
width: 50%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
}
#modal form i{
  position: absolute;
  top: 4px;
  right: 7px;
  font-size: 20px;
  cursor: pointer;
}
#modal form ul li{
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  flex-wrap: wrap;
  margin: 20px 0;
}
#modal form ul li input{
    height: 20px;
    position: relative;
    float: left;
    width: 90%;
    border: none;
    border-bottom: 1px solid #B0BEC5;
    background-color: transparent;
    font-size: 14px;
    outline: none;
    transition: all 0.5s;
}
.btnSign {
  background: rgba(255,64,88,0.74);
  border-radius: 8px;
  padding: 15px 30px;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
}
 .btnSubmit{
   position: absolute;
   bottom: 31px;
   right: 15px;
   background: #221f1f;
   border-radius: 8px;
   padding: 15px 30px;
   border: none;
   color: #fff;
   font-size: 14px;
   cursor: pointer;
   text-decoration: none;
 }
@media only screen and (max-width: 700px) {
  #modal form ul li{
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    flex-wrap: wrap;
  }
}</style>
