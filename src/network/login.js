import {request} from './request.js'
export function login(yhm,pwd){
	return request({
		url: '/LoginServlet/login.do',
		params: {
			yhm,
			pwd
		}
	})
}