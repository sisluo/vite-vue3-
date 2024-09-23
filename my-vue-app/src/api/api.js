/**
 * 整个项目的统一管理
 */
import request from "./request"
//请求首页左侧的表格的数据

export default {
  getTableData() {
    return request({
      url: "/home/getTableData",
      // url: "https://apifoxmock.com/m1/4068509-0-default/api",
      method: "get",
      mock: false,
    })
  },
  getCountData() {
    return request({
      url: "/home/getCountData",
      method: "get",
      mock: false,
    })
  },
  getChartData() {
    return request({
      url: '/home/getChartData',
      method: 'get',
    })
  },
  getUserData(data) {
    return request({
      url: '/home/getUserData',
      method: 'get',
      data,
    })
  },
  deleteUser(data) {
    return request({
      url: '/user/deleteUser',
      method: 'get',
      data,
    })
  },
  addUser(data) {
    return request({
      url: '/user/addUser',
      method: 'post',
      data,
    })
  },
  editUser(params) {
    return request({
      url: '/user/editUser',
      method: 'post',
      data: params
    })
  },
  getMenu(params) {
    return request({
      url: '/permission/getMenu',
      method: 'post',
      data: params
    })
  },
}