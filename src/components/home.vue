<template>
	<div class="home" >
		<navMenu/>
		<car/>
	</div>
</template>

<script>
import navMenu from "@/components/navMenu.vue";
import car from "@/components/car.vue";
export default {
	name: 'home',
	components:{
		navMenu,
		car
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
