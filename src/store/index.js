import Vue from 'vue'
import Vuex from 'vuex'
 
 //安装插件
 Vue.use(Vuex)
 //创建store对象
 const store = new Vuex.Store({
	 state:{
		 yhid:''
	 },
	 mutations:{
		 addYh(state,payload){
			 state.yhid=payload
		 }
	 },
	 actions:{
		 addYhid(context,payload){
		 	context.commit('addYh',payload)
		 }
	 }
 })
 //挂载
 export default store
