<template>
	<div id="menu-tab-bar">
		<div id="menu">
			<!-- 	<p  @click="show">商品管理<span v-if="isShow">∨</span><span v-else>∧</span></p>
							<div v-show="!isShow">
								<div><a href="test.html"  target="content">商品维护</a></div>
								<div><a href="test.html"  target="content">添加商品</a></div>
							</div> -->
						<!-- <p  @click="show">{{item.name}}<span v-if="isShow">∨</span><span v-else>∧</span></p>
										<div v-show="!isShow" v-for="powers in item.power">
											<div @click="goWhere(powers.url)">{{powers.powername}}</div>
										</div>	 -->
										<slot name="leftMenu"></slot>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'MenuTabBar',
		props:{
			item:{
				type: Object,
				default(){
					return{}
				}
			}
		},
		data(){
			return{
				isShow: true
			}
		},
		methods:{
			show(){
				// if($(this).find("span").html() == "∧"){
				// 				$(this).find("span").html("∨");
				// 			}else{
				// 				$(this).find("span").html("∧");
				// 			}
				// 			$(this).next().slideToggle("slow");
				this.isShow=!this.isShow
			},
			goWhere(url){
				this.$router.replace(url)
			}
		}
	}
</script>

<style scoped="scoped">
	#menu p{
		margin: 0;
		padding:10px 15px;
		color:white;
		cursor: pointer;
	}
	#menu p:hover{
		color:#F1AF00;
	}
	#menu p span{
		float: right;
	}
	#menu>div>div{
		padding: 10px 0;
		/* display: none; */
		background-color: #111111;
	}
	#menu>div>div>div{
		height: 16px;
		padding: 10px 0;
		text-indent: 40px;
		cursor: pointer;
	}
	
	#menu>div>div:hover{
		background-color: rgba(255,255,255,0.5);/*50%的透明度*/
		/*opacity: 0.5;*/
	}
	

	
</style>
