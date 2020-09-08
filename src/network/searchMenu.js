import {request} from './request.js'
export function searchMenu(yhid){
	return request({
		url: '/menuServlet/yz.do',
		params: {
			yhid
		}
	})
}