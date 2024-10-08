import useUserStore from '@/store/user';
import { message } from 'ant-design-vue';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

axios.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    if (config.headers) {
      const userStore = useUserStore();
      config.headers.Authorization = `Bearer ${userStore.$state.token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (res.code === 500) {
      message.warn(res.msg || 'System Error');
      throw new Error(res.msg || '系统内部错误');
    } else if (res.code === 403) {
      message.warn('没有权限');
      throw new Error(res.msg || '没有权限');
    } else if (res.code === 401) {
    } else if (res.code === 404) {
      message.warn(`当前版本不支持这个功能`);
    }
    return response;
  },
  error => {
    const errMsg: string = error.toString();
    if (errMsg.includes('Network Error')) {
      message.warn('网络错误');
    } else if (errMsg.includes('canceled')) {
      // 用户取消请求
    } else {
      message.error(error.message);
    }
    return Promise.reject(error);
  },
);
