<template>
<div>
		<table-search  :show="show" @btnClick="btnClick"></table-search>
		<update-window :upWindowMessage='upWindowMessage' v-show="isShow" @closeUpdateWindow="closeUpdateWindow1" @save="save">
			<tr slot="inMessage1">
						 <td>角色ID</td>
						 <td><input type="text" v-model="jsid"></td>
			</tr>
			<tr slot="inMessage2">
						 <td>角色名称</td>
						 <td><input type="text" v-model="jsmc"></td>
			</tr>
			<tr slot="inMessage3">
						 <td>角色描述</td>
						 <td><input type="text" v-model="jsms"></td>
			</tr>
		</update-window>
		<update-window  v-show="isShow1" @closeUpdateWindow="closeUpdateWindow2" @doSave="doSave">
			<tr slot="inMessage1">
						 <td>菜单名称</td>
						 <td>
						 	<select multiple="multiple" v-model="isSelect">
						 		<option v-for="(item1,index) in menuName" :value="index">{{item1}}</option>
						 	</select>
						 </td>
			</tr>
		</update-window>
	</div>
</template>

<script>
	import TableSearch from 'components/common/table/TableSearch.vue'
	import UpdateWindow from 'components/common/UpdateWindow.vue'
	import {searchAllRole} from 'network/searchAll.js'
	import {deleteRole} from 'network/delete.js'
	import {updateRole} from 'network/update.js'
	import {searchAllMenu} from 'network/searchAll.js'
	import {AddRole_Menu} from 'network/add.js'
	export default{
		name: 'Jswh',
		components:{
			TableSearch,
			UpdateWindow
		},
		created() {
			searchAllRole().then(res => {
				for(let i=0;i<res.length;i++){
					this.show.message.push(res[i])
				}
			}),
			searchAllMenu().then(res => {
				for(let i=0;i<res.length;i++){
					this.menuName.push(res[i].cdmc)
					this.menuId.push(res[i].cdid)
				}
			})
			
		},
		data(){
			return{
				show:{
				titles:['序号','角色ID','角色名称','角色描述','操作'],
				btnKey:['修改','删除','角色菜单'],
				message:[
					
				]
				},
				menuName:[],
				menuId:[],
				upWindowMessage:{
					message:['角色ID','角色名称','角色描述'],
					select:{name:'菜单名称',option:this.menuName},
					isShow:true
				},
				isShow:false,
				isShow1:false,
				jsid:'',
				jsmc:'',
				jsms:'',
				isSelect:[]
			}
		},
		methods:{
			btnClick(index,item){
				switch(index){
					case 0:{this.isShow=true;this.jsid=item.jsid;this.jsmc=item.jsmc;this.jsms=item.jsms; break}
					case 1:{deleteRole(item.jsid).then(res => {
						if(res==true){
							
						}else{
							alert('删除失败')
						}
					});break}
					case 2:{this.isShow1=true;this.jsid=item.jsid; break}
				
				}
			},
			closeUpdateWindow1(){
				this.isShow=!this.isShow
			},
			closeUpdateWindow2(){
				this.isShow1=!this.isShow1
			},
			save(){
				updateRole(this.jsid,this.jsmc,this.jsms).then(res => {
					if(res==true){
						this.isShow=false
					}else{
						alert('修改失败')
					}
				})
			},
			doSave(){
				for(let i=0;i<this.isSelect.length;i++){
					AddRole_Menu(this.jsid,this.menuId[this.isSelect[i]]).then(res => {
						console.log(res)
					})
				}
			}
		}
	}
</script>

<style scoped="scoped">
</style>
