<template>
	<div class="wrapper" ref="wrapper">
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default{
		name: 'Scroll',
		data(){
			return {
				scroll: null
			}
		},
		props:{
			probeType: {
				type: Number,
				default: 0
			},
			pullUpLoad: {
				type: Boolean,
				default: false
			}
		},
		mounted() {
			//创建scroll对象
			this.scroll = new BScroll(this.$refs.wrapper,{
				click: true,
				probeType: this.probeType,
				pullUpLoad: this.pullUpLoad,
				mouseWheel: true
			})
			//监听滚动区域
			this.scroll.on('scroll',(position) => {
				this.$emit('scroll',position)
			})
			//监听上拉事件
			this.scroll.on('pullingUp',() => {
				this.$emit('pullingUp')
			})
			
		},
		methods:{
			//跳到页面的某个位置
			scrollTo(x , y , time = 300){
				this.scroll && this.scroll.scrollTo(x , y , time)
			},
			finishPullUp(){
				this.scroll && this.scroll.finishPullUp()
			},
			refresh(){
				this.scroll && this.scroll.refresh()
			},
			getScrollY(){
				return this.scroll ? this.scroll : 0
			}
		}
	
	}
</script>

<style scoped="scoped">
</style>
