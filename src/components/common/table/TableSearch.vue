<template>
	<div id="table-search">
		<div class="head">
			<span><img src="~assets/img/table.png"/> 查询结果</span>
			<span onclick="location.reload()" class="refresh"><img src="~assets/img/refresh.png"/></span>
		</div>
		<scroll class="content"
						ref="scroll" 
						:probe-type = "3"
						 :pull-up-load = "true" 
						 >
		<table class="table-content">
			<tr>
				<th  v-for="item in show.titles">{{item}}</th>
			</tr>
			<tr v-for="(item,index) in show.message">
				<td width="5%">{{index}}</td>
				<td v-for="(item1,i) in item" width="10%">{{item1}}</td>
				<td width="10%">
					<button v-for="(item2,index) in show.btnKey" @click="btnClick(index,item)" >{{item2}}</button>
				</td>
			</tr>
		</table>
		</scroll>
	</div>
</template>

<script>
	import Scroll from '../scroll/Scroll.vue'
	import {debounce} from 'common/utils.js'
	export default{
		name: 'TableSearch',
		components:{
			Scroll
		},
		props:{
			show:{
				type:Object,
				default(){
					return{}
				}
			}
		},
		methods:{
			btnClick(index,item){
				this.$emit('btnClick',index,item)
			}
		},
		mounted() {
			//监听商品图片加载完成
			const refresh = debounce(this.$refs.scroll.refresh , 50)
			this.$bus.$on('finishLoad' , () => {
				refresh()
			})
		},
	}
</script>

<style scoped="scoped">
	.refresh{
		float: right;
	}
	.head{
		height: 20px;
		background-color: #34495E;
		color:white;
		padding: 10px;
	}
	.table-content{
		width: 1297px;
	}
	table tr{
		height: 35px;
		
		word-break: keep-all;
	}
	table tr th{
		width: 5%;
	}
	table tr td{
		
		text-align: center;
		
	}
	
	table tr:nth-child(even){/*偶数行背景色*/
		background-color: #F8F8F8;
	}
table tr button{
	text-decoration: none;
	color: white;
	background-color: #5BC0DE;
	padding:3px 20px;
	border-radius: 3px;
}
.content{
		height: 600px;
		top: 44px;
		bottom: 49px;
		left: 0;
		right: 0;
		overflow: hidden;
	}
	

</style>
