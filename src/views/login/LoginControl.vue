<template>
	<div class="wrap" id="wrap">
		<div class="logGet" id="logGet">
			<div id="login1">
				<!-- 头部提示信息 -->
				<div class="logD logDtip">
					<img src="~assets/img/login.png"/>
				</div>
					<!-- 输入框 -->
				<div class="lgD">
					<input id="yhm" placeholder="输入用户名" style="height: 30px; width: 300px; margin-bottom: 15px;"/>
				</div>
				<div class="lgD">
					<input id="pwd" type="text" placeholder="输入用户密码" style="height: 30px; width: 300px; margin-bottom: 10px;"/>
				</div>
				<div class="logC">
					<input id="doSave"   value="登录" type="button" style="width: 70px;height: 20px;"/>
				</div>
			</div>
			</div>
	</div>
</template>

<script>
	export default{
		name: 'LoginControl'
	}
</script>

<style scoped="scoped">
	* {margin: 0; padding: 0; box-sizing: border-box;}
	#wrap{
		width: 100%;
		height:800px;
		text-align: center;
		
	}
	#logGet{
		width: 1100px;
		height: 700px;
		border: 1px solid black;
		margin: auto;
	}
	#login1{
		margin: auto;
		height: 200px;
		padding-top: 100px;
	}
	.p1{
		font-size: xx-large;
		font-weight: 900;
		margin-bottom: 20px;
	}

</style>
