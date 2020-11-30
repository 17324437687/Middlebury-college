import request from "./request"

//获取讲师列表
// export function getApi() {
//     return request({
//         method: 'get',
//         url: "api/admin/lecturer/name/id"
//     })
// }

// 添加讲师列表 /api/teacher
export function setUpdata(data) {
    return request({
        method: 'post',
        url: '/api/teacher',
        data
    })
}

// 修改讲师列表
// export function UpdataUpdata(id, data) {
//     return request({
//         method: 'put',
//         url: `api/admin/lecturer/${id}`,
//         data
//     })
// }

//删除讲师列表
// export function deleteList(id) {
//     return request({
//         method: 'delete',
//         url: `api/admin/lecturer/${id}`
//     })
// }

// 根据姓名查询讲师
// export function getNameLecturer(key, value) {
//     return request({
//         method: "get",
//         url: `api/admin/lecturer/name/id${key}=${value}`,

//     })

// }

// app/curriculum/list 添加课程分类
// export function addCurriculumList(data) {
//     return request({
//         method: 'post',
//         url: 'app/curriculum/list',
//         data
//     })
// }

// app/curriculum/list 获取所有课程分类
// export function getCurriculumList() {
//     return request({
//         method: 'get',
//         url: 'app/curriculum/list',
//     })
// }

// 删除 课程分类
// export function deleteCurriculumList(id) {
//     return request({
//         method: "delete",
//         url: `app/curriculum/list/${id}`,

//     })
// }
// 修改课程分类 
// export function UpDataCurriculumList(id, data) {
//     return request({
//         method: 'put',
//         url: `app/curriculum/list/${id}`,
//         data
//     })
// }



// 发布课程 api/publish
// export function addPublish(data) {
//     return request({
//         method: "post",
//         url: "api/publish",
//         data
//     })
// }

//获取课程列表 api/publish
// export function getPublish() {
//     return request({
//         method: "get",
//         url: 'api/publish'
//     })
// }