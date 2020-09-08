import Vue from 'vue'
import VueRouter from 'vue-router'
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};//多次点击问题
Vue.use(VueRouter)
const Home =()=> import ('views/home/Home')
const Cxsj =()=> import('views/cxsj/Cxsj')
const Cdwh =()=> import('views/cdwh/Cdwh')
const Cdzj =()=> import('views/cdzj/Cdzj')
const Jswh =()=> import('views/jswh/Jswh')
const Jszj =()=> import('views/jszj/Jszj')
const Sjgl =()=> import('views/sjgl/Sjgl')
const Xgmm =()=> import('views/xgmm/Xgmm')
const Yhgl =()=> import('views/yhgl/Yhgl')
const Yhwh =()=> import('views/yhwh/Yhwh')
const Yhzj =()=> import('views/yhzj/Yhzj')
const Yhjs =()=> import('views/yhjs/Yhjs')
const Jstj =()=> import('views/jstj/Jstj')
const Tjqx =()=> import('views/tjqx/Tjqx')
  const routes = [
  {
  	path: '',
  	redirect:'/home',
  },
  {
  	path: '/home',
  	component:Home
  },
	{
		path: '/cxsj',
		component:Cxsj
	},
	{
		path: '/cdwh',
		component:Cdwh
	},
	{
		path: '/cdzj',
		component:Cdzj
	},
	{
		path: '/jswh',
		component:Jswh
	},
	{
		path: '/jszj',
		component:Jszj
	},
	{
		path: '/sjgl',
		component:Sjgl
	},
	{
		path: '/xgmm',
		component:Xgmm
	},
	{
		path: '/yhgl',
		component:Yhgl
	},
	{
		path: '/yhwh',
		component:Yhwh
	},
	{
		path: '/yhzj',
		component:Yhzj
	},
	{
		path: '/yhjs',
		component:Yhjs,
		 meta: { keepAlive: false }
	},
	{
		path: '/jstj',
		component:Jstj
	},
	{
		path: '/tjqx',
		component:Tjqx,
		 meta: { keepAlive: false }
	},
]

const router = new VueRouter({
  routes,
	mode:"hash"
})

export default router
