<template>
	<div class="formContainer" >
		<div class="formData">
			<h2>Login</h2>
			<p>By loging in you agree to the ridiclusly long terms that you didn't bother to read</p>
		</div>
		<div class="enterForm">
			<form>
				<p>email</p>
				<input type="email" required>
				<p>pssword</p>
				<input v-bind:type="passType" minlength="8" required >
				<i id='eye' v-bind:class="eye" v-on:click = "passShow"></i>
				<div class="submit" >
					<input type="submit" value="Login" >
				</div>
			</form> 
		</div>
	</div>
</template>

<script>
export default {
	name: 'loginForm',
	data() {
		return {
			passType: "password",
			eye: "fas fa-eye",
			eyeClose: "fas fa-eye-slash"
			}
	},
	methods: {
		 passShow : function(event) {
			 if(this.passType == "password" && this.eye == "fas fa-eye"){
				 
				 return this.passType = "text",
					this.eye = "fas fa-eye-slash";
					
			 } else if(this.passType == "text" && this.eye == "fas fa-eye-slash"){
				 
				 return this.passType="password",
				 this.eye = "fas fa-eye";

			 }

		}
	}

}
</script>

<style scoped>
div.formContainer {
	height: 300px;
	width: 539px;
	background: #fff;
	display: flex;
	align-items: center;  
}

div.formData { 
	padding: 40px;
	width: 40%;
	}

div.formData p {
	color: #B0B4B5;
	}

div.enterForm {
	position: relative;
	border-radius: 0.5em;
	background: #32475C;
	width: 262px;
	height: 245px;
	-webkit-box-shadow: 0px -1px 29px 3px rgba(0,0,0,0.75);
	-moz-box-shadow: 0px -1px 29px 3px rgba(0,0,0,0.75);
	box-shadow: 0px -1px 29px 3px rgba(0,0,0,0.75);
	display: flex;
	align-items: center;
	justify-content: center;	
	color:#E8EEF3;
	}

	div.enterForm P {
		margin: 5px;
	}
	div.enterForm input{
		width: 146px;
	}
	div.submit {
		margin-top: 40px;
		width:192px;
		height: 41px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}

		div.submit input {
			background: transparent;
			border: none;
			font-size: 20px;
	}

		 i{
		cursor: pointer;
		color:#32475C;
		position: absolute;
		top:112px;
		left: 156px;
		}	 
</style>
