<template>
	<div class="cdwh">
			<table-search  :show="show" @btnClick="btnClick"></table-search>
			<update-window :upWindowMessage='upWindowMessage' v-show="isShow" @closeUpdateWindow="closeUpdateWindow" @save="save">
				<tr slot="inMessage1">
							 <td>菜单名称</td>
							 <td><input type="text" v-model="cdmc"></td>
				</tr>
				<tr slot="inMessage2">
							 <td>菜单描述</td>
							 <td><input type="text" v-model="cdms"></td>
				</tr>
				<tr slot="inMessage3">
							 <td>URL</td>
							 <td><input type="text" v-model="url"></td>
				</tr>
			</update-window>
		</div>
</template>

<script>
	import TableSearch from 'components/common/table/TableSearch.vue'
	import UpdateWindow from 'components/common/UpdateWindow.vue'
	import {searchAllMenu} from 'network/searchAll.js'
	import {updateMenu} from 'network/update.js'
	import {deleteMenu} from 'network/delete.js'
	export default{
		name: 'Cdwh',
		components:{
			TableSearch,
			UpdateWindow
		},
		created() {
			searchAllMenu().then(res => {
				for(let i=0;i<res.length;i++){
					this.show.message.push(res[i])
				}
				this.$bus.$emit('finishLoad')
			})
		},
		data(){
			return{
				show:{
				titles:['序号','菜单ID','菜单名称','URL','菜单描述','父菜单ID','操作'],
				btnKey:['修改','删除'],
				message:[
				
				]
				},
				upWindowMessage:{
					message:['菜单名称','URL','菜单描述'],
					select:{name:'',option:''},
					isShow:false
				},
				isShow:false,
				cdmc:'',
				cdms:'',
				url:'',
				cdid:''
			}
		},
		methods:{
			btnClick(index,item){
				switch(index){
					case 0:{this.isShow=true;this.cdmc=item.cdmc; this.cdms=item.cdms;this.url=item.url;this.cdid=item.cdid; break}
					case 1:{
						deleteMenu(item.cdid).then(res => {
						if(res==true){
							alert('删除成功')
						}else{
							alert(删除失败)
						}
					})
						;break}
					
				}
			},
			closeUpdateWindow(){
				this.isShow=!this.isShow
			},
			save(){
				updateMenu(	this.cdid,this.cdmc,this.cdms,this.url).then(res => {
					if(res==true){
						this.isShow=false
					}else{
						alert('修改失败')
					}
				})
			}
		}
	}
</script>

<style scoped="scoped">
	
</style>
