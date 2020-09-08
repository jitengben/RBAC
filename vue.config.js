module.exports = {
    //配置别名
    configureWebpack: {
        resolve: {
            alias: {
                'views': '@/views',
                'components': '@/components',
                'network': '@/network',
                'common': '@/common',
                'assets': '@/assets',
            }
        }
    },
		//配置服务器代理
		devServer:{
			host:'localhost',
			port:8084,
			proxy:{
				'/rbac':{
					target:'http://39.101.198.93:8080',//要跨域的域名
					changeOrigin:true,//是否开启跨域
				}
			}
		},
		publicPath:'./'
}
