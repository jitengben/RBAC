<template>
	<div id="updateWindow" >
		<div id="title">
			<span id="titleTxt">修改</span>
			<span id="titleClose" @click="closeUpdateWindow()">X</span>
		</div>
			<table width="100%" cellspacing="0">
				<!-- <tr v-for="(item,index) in upWindowMessage.message">
					<td >{{item}}</td>
					<td><input  type="text" value="" /></td>
				</tr> -->
				<slot name="inMessage1"></slot>
				<slot name="inMessage2"></slot>
				<slot name="inMessage3"></slot>
				<slot name="inMessage4"></slot>
				<slot name="inMessage5"></slot>
			<!-- 	<tr v-show="upWindowMessage.isShow">
					<td>{{upWindowMessage.select.name}}</td>
					<td>
						<select name="yhsf">
							<option v-for="(item1,index) in upWindowMessage.select.option">{{item1}}</option>
						</select>
					</td>
				</tr> -->
				<tr>
					<td colspan="2" id="btnPanel">
						<button @click="save">保存</button>
						<button @click="closeUpdateWindow">取消</button>
					</td>
				</tr>
			</table>
	</div>
</template>

<script>
	export default{
		name: 'UpdateWindow',
		data(){
			return{
				isShow: false,
				input1:'abc',
				input2:'abc'
			}
		},
		props:{
			upWindowMessage:{
				type: Object,
				default(){
					return{}
				}
			}
		},
		methods:{
			closeUpdateWindow(){
				this.$emit('closeUpdateWindow')
			},
			save(){
				this.$emit('save')
				this.$emit('doSave')
			}
		}
	}
</script>

<style scoped="scoped">
	#updateWindow{
		/* display:none; */
		background-color: white;
		border: solid 1px black;
		border-radius: 5px;
		width: 400px;
		position: fixed;
		top: 30%;
		left: 30%;
		box-shadow: 7px 7px 5px #888888;
	}
	
	#updateWindow #title{
		background-color: #5BC0DE;
		height: 28px;
		color:white
	}
	#updateWindow #titleTxt{
		float: left;
		padding:5px 10px;
	}
	#updateWindow #titleClose{
		float:right;
		padding: 5px 20px;
		cursor:pointer
	}
	#updateWindow #titleClose:hover{
		background-color: lightgray;
	}
	table tr{
			height: 35px;
			
			word-break: keep-all;
		}
		table tr th{
			width: 5%;
		}
		table tr td{
			width: 5%;
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
</style>
