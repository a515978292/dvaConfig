import axios from '../utils/request'

//信息
export const list = params => {
  return axios.post('/lesson/list', params);
};

//教师管理列表
export const orgTeacherInfo = (params)=>{
  return axios.post('/usr/orgTeacherInfo',params);
}