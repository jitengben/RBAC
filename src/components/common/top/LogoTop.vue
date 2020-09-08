<template>
	<div id="top">
		<logo-txt></logo-txt>
		<logo-message></logo-message>
	</div>
</template>

<script>
	import LogoTxt from './logo/LogoTxt.vue'
	import LogoMessage from './LogoMessage/LogoMessage.vue'
	export default{
		name: 'LogoTop',
		components:{
			LogoTxt,
			LogoMessage
		}
	}
</script>

<style scoped="scoped">
   #top{
   	height: 8%;
   	padding-top:15px ;
   	background-color: #34495E;
		border-bottom: 3px solid black;
   }
</style>
