<template>
	<div class="tab-bar">
		<!-- <h2>{{$store.state.yhid}}</h2> -->
		<logo-top></logo-top>
		<left-tab-bar></left-tab-bar>
		<router-view key="key" v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>

<script>
	import LeftTabBar from './left/LeftTabBar.vue'
	import LogoTop from './top/LogoTop.vue'
	export default{
		name: 'TabBar',
		components:{
			 LeftTabBar,
			 LogoTop
		},
		// created() {
		// 	this.$store.commit('addYhid','159')
		// }
	}
</script>

<style scoped="scoped">
	.tab-bar{
		height: 100%;
	}

</style>
