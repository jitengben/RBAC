import {request} from './request.js'
export function searchAll(){
	return request({
		url: '/rbac_userServlet/listAll.do'
	})
}
export function searchAllRole_User(){
	return request({
		url: 'rbac_2Servlet/listUser.do'
	})
}
export function searchAllRole(){
	return request({
		url: '/rbac_roleServlet/listAll.do'
	})
}
export function searchAllRole_Menu(){
	return request({
		url: '/role_menuMgrServlet/listMenu.do'
	})
}
export function searchAllMenu(){
	return request({
		url: '/rbac_menuServlet/listAll.do'
	})
}
export function searchAllFMenu(){
	return request({
		url: '/FcdmenuServlet/listFcd.do'
	})
}
export function searchAllRole_Name(){
	return request({
		url: '/rbac_roleServlet/listAll.do'
	})
}
