import axios from 'axios';
import { Toast } from 'antd-mobile';

// 设置请求头
axios.defaults.headers.common['Accept'] = "application/json; version=1.3.0";
axios.defaults.headers.common['X-Emao-TCM-Wap'] = "1";

// interceptors拦截器
axios.interceptors.request.use(function(config) {
    Toast.loading('加载中', 0);
    return config;
})

axios.interceptors.response.use(function(config) {
    Toast.hide();
    return config;
})