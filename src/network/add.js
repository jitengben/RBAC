import {request} from './request.js'
//用户增加
export function getAdd(yhm,pwd){
	return request({
		url: '/rbac_userServlet/addUser.do',
		params: {
			yhm,
			pwd
		}
	})
}
//角色增加
export function getAddRole(jsmc,jsms){
	return request({
		url: '/rbac_roleServlet/addRole.do',
		params: {
			jsmc,
			jsms
		}
	})
}
export function getAddMenu(cdmc,url,cdms,fcdid){
	return request({
		url: '/rbac_menuServlet/addMenu.do',
		params: {
			cdmc,
			url,
			cdms,
			fcdid
		}
	})
}
//角色添加菜单
export function AddRole_Menu(jsid,cdid){
	return request({
		url: '/rbac_role_menuServlet/addRm.do',
		params: {
			jsid,
			cdid
		}
	})
}

