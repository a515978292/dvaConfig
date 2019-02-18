import axios from 'axios';
import message from './message';
axios.defaults.withCredentials = false; //表示跨域请求不需要凭证
//创建实例
const server = axios.create({
  baseURL: 'https://api.mizholdings.com/t/mizhumanage/web',
  //允许在向服务器发送前，修改请求数据
  transformRequest: [
    function(data) {
      if (data instanceof URLSearchParams) {
        return data.toString();
      }
      if (data) {
        let keys2 = Object.keys(data);
        let params = [];
        keys2.forEach(function(item) {
          if (typeof data[item] != 'undefined' && data[item] != 'null' && data[item] != null) {
            params.push(item + '=' + data[item]);
          }
        });
        return encodeURI(params.join('&'));
      }
    },
  ],
  timeout: 15000, // 请求超时时间，如果请求话费了超过 `timeout` 的时间，请求将被中断
});

//添加请求拦截器，每次请求携带token
server.interceptors.request.use(config => {
  let token = window.localStorage.getItem('token'); //从缓存中取token

  message.loading('加载中', 0);
  return config;
});

//添加响应拦截
server.interceptors.response.use(config => {
  if (config.data.code == 200) {
    if (config.data.token) {
      window.localStorage.token = config.data.token;
    }
    message.destroy();
    return { status: 'ok', currentAuthority: 'admin', data: config.data }; //antd pro登陆必须用到status,currentAuthority这些字段，所以在响应时改掉返回的数据
  } else {
    message.destroy();
    return { status: 'error', currentAuthority: 'guest', data: config.data };
  }
});

export default server;
