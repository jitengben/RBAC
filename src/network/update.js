import {request} from './request.js'
export function updateUser(yhid,yhm,pwd){
	return request({
		url:'/rbac_userServlet/updateUser.do',
		params: {
			yhid,
			yhm,
			pwd
		}
	})
}
export function updateRole(jsid,jsmc,jsms){
	return request({
		url:'rbac_roleServlet/updateRole.do',
		params: {
			jsid,
			jsmc,
			jsms
		}
	})
}
export function updateMenu(	cdid,cdmc,cdms,url){
	return request({
		url:'rbac_menuServlet/updateMenu.do',
		params: {
			cdid,
			cdmc,
			cdms,
			url
		}
	})
}
export function updateUser_Role(yhjsid,yhid,jsid){
	return request({
		url:'rbac_user_roleServlet/updateUr.do',
		params: {
			yhjsid,
			yhid,
			jsid
		}
	})
}

