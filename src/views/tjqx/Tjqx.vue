<template>
	<div>
			<table-search  :show="show" @btnClick="btnClick"></table-search>
			<update-window :upWindowMessage='upWindowMessage' v-show="isShow" @closeUpdateWindow="closeUpdateWindow"></update-window>
		</div>
</template>

<script>
	import TableSearch from 'components/common/table/TableSearch.vue'
	import UpdateWindow from 'components/common/UpdateWindow.vue'
	import {searchAllRole_Menu} from 'network/searchAll.js'
	import {deleteRole_Menu} from 'network/delete.js'
	export default{
		name: 'Tjqx',
		components:{
			TableSearch,
			UpdateWindow
		},
		created() {
			searchAllRole_Menu().then(res => {
				for(let i=0;i<res.length;i++){
					this.show.message.push(res[i])
				}
			})
		},
		data(){
			return{
				show:{
				titles:['序号','角色ID','角色名称','菜单ID','菜单名称','菜单描述','角色菜单ID', '操作'],
				btnKey:['删除'],
				message:[
					
				]
				},
				upWindowMessage:{
					message:[],
					select:{name:'权限名称',option:['管理学生','批改作业']},
					isShow:true
				},
				isShow:false
			}
		},
		methods:{
			btnClick(index,item){
				switch(index){
					case 0:{deleteRole_Menu(item.jscdid).then(res => {
						if(res == true){
							alert('删除成功')
						}else{
							alert('删除失败')
						}
					});break}
					
				}
			},
			closeUpdateWindow(){
				this.isShow=!this.isShow
			}
		}
	}
</script>

<style scoped="scoped">
</style>
