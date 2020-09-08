import {request} from './request.js'
//用户删除
export function deleteUser(yhid){
	return request({
		url: 'rbac_userServlet/deleteUser.do',
		params: {
			yhid
		}
	})
}
export function deleteRole(jsid){
	return request({
		url: 'rbac_roleServlet/deleteRole.do',
		params: {
			jsid
		}
	})
}
export function deleteRole_User(yhjsid){
	return request({
		url: '/rbac_user_roleServlet/deleteUr.do',
		params: {
			yhjsid
		}
	})
}
export function deleteMenu(cdid){
	return request({
		url: '/rbac_menuServlet/deleteMenu.do',
		params: {
			cdid
		}
	})
}
export function deleteRole_Menu(jscdid){
	return request({
		url: '/rbac_role_menuServlet/deleteRm.do',
		params: {
			jscdid
		}
	})
}