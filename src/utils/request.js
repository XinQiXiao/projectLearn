import axios from 'axios';

const service = axios.create({
    baseURL: '',
    timeout: 60000
});

// 请求拦截 request 拦截器
service.interceptors.request.use(
    config => {
        // 登录 处理 如 token， 将登录信息 放到请求头或者请求参数
        // 处理请求白名单 等
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);
// 响应 response 拦截器
service.interceptors.response.use(
    response => {
        // 业务处理 如 404 500 200 301 等等
        
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    }
);

export default service;