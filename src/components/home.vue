<template>
	<div class="home" >
		<navMenu/>
		
		<datePicker/>
	</div>
</template>

<script>
import navMenu from "@/components/navMenu.vue";
import datePicker from "@/components/datePicker";
export default {
	name: 'home',
	components:{
		navMenu,
		datePicker
	},
	data() {
		return {
			
			}
	},
	methods: {
	}

}
</script>

<style scoped>

</style>
