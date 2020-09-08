<template>
	<table cellspacing="0">
					<tr><td colspan="2" style="text-align: center;color: red;" id="tip">&nbsp;</td></tr>
					<tr>
						<td width="46%">菜单名称</td>
						<td><input  v-model="menuName"/><span>*</span></td>
						<td><div>{{tip}}</div></td>
					</tr>
					<tr>
						<td>url</td>
						<td><input  v-model="menuUrl"/><span>*</span></td>
					</tr>
					<tr>
						<td>菜单描述</td>
						<td><input  v-model="menuMessage"/><span>*</span></td>
					</tr>
					<tr>
										<td>父菜单</td>
										<td>
											<select v-model="isSelect">
												<option value="">请选择</option>
												<option value="null">无</option>
												<option v-for="(item,index) in fMenu" :value="index">{{item}}</option>
											</select>
										</td>
									</tr>
					<tr>
						<td colspan="2" id="btnPanel">
							<!-- <input type="submit" value="保存" /> -->
							<button @click="save">保存</button>
							<button @click="clear">重置</button>
						</td>
					</tr>
				</table>
</template>

<script>
	import {getAddMenu} from 'network/add.js'
	import {searchAllFMenu} from 'network/searchAll.js'
	export default{
		name: 'Cdzj',
		data(){
			return{
				menuName:'',
				menuMessage:'',
				menuUrl:'',
				tip:'',
				isSelect:'',
				fMenu:[],
				fMenuId:[],
			}
		},
		created() {
			searchAllFMenu().then(res => {
				for(let i=0; i<res.length;i++){
					this.fMenu.push(res[i].cdmc)
					this.fMenuId.push(res[i].cdid)
				}
			})
		},
		methods:{
			clear(){
				this.menuMessage='',
				this.menuName='',
				this.menuUrl='',
		    this.tip=''
			},
			save(){
				
				if(this.menuMessage&&this.menuName&&this.menuUrl&&this.isSelect){
					if(this.isSelect!=null){
						this.isSelect= this.fMenuId[this.isSelect]
						getAddMenu(this.menuName,this.menuUrl,this.menuMessage,this.isSelect).then(res =>{
							if(res==true){
								this.tip='保存成功'
							}else{
								this.tip='保存失败'
							}
						})
					}else{
						getAddMenu(this.menuName,this.menuUrl,this.menuMessage,this.isSelect).then(res =>{
							if(res==true){
								this.tip='保存成功'
							}else{
								this.tip='保存失败'
							}
						})
					}
				}else{
					this.tip='请输入菜单信息'
				}
			}
		}
	}
</script>

<style scoped="scoped">
	table{
		margin: auto;
		
	}
	table tr{
		height: 35px;
		text-align: center;
		word-break: keep-all;
	}
	
	table tr:nth-child(even){/*偶数行背景色*/
		background-color: #F8F8F8;
	}
	
	td > span{
		color:red;
	}
	
	form table tr td:nth-child(odd){/*奇数列*/
		text-align: right;
		/*color:#F1AF00;*/
	}
	form table tr td:nth-child(even){/*偶数列*/
		text-align: left;
	}
	
	form table tr td#btnPanel{
		text-align: center;
	}
	
	
	table tr a{
		text-decoration: none;
		color: white;
		background-color: #5BC0DE;
		padding:3px 20px;
		border-radius: 3px;
	}
	
	input{
		width: 150px;
		height: 20px;
		border-radius: 3px;
		border:1px solid lightgrey;
	}
	
	select{
		width: 153px;
		height: 24px;
		border-radius: 3px;
		border:1px solid lightgrey;
	}
	
	/*按钮*/
	input[type='button'],
	input[type='submit'],
	input[type='reset'],
	button{
		width: 100px;
		height: 25px;
		border: none;
		background-color: #5BC0DE;
		color:white;
		cursor: pointer;
		margin:10px;
	}
	
	input:focus,
	select:focus{
		border-color:darkgrey;
	}
	
	table tr a:hover{
		color:black;
		cursor:pointer;
	}
	input:hover{
		color:black;
	}
	
	input[readonly="readonly"]:hover{
		border:1px solid lightgrey;
	}
	
	table tr a[href='#']:hover{
		color:white;
		cursor:default;
	}
</style>
