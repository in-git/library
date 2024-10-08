import useUserStore from '@/store/user';
import axios, { type AxiosInstance } from 'axios';
import { handleError } from './handleError';

/* 创建一个新请求实例，baseUrl不会指向后端 */
const createRequestInstance = (): AxiosInstance => {
  const userStore = useUserStore();
  const instance = axios.create({
    timeout: 0, // 超时时间
    withCredentials: true, // 允许跨域携带cookie
    baseURL: ``,
    headers: {
      Authorization: `Bearer ${userStore.$state.token}`,
    },
  });

  instance.interceptors.response.use(
    async res => {
      return res.data;
    },
    async err => {
      err = await handleError(err);
      return Promise.reject(err);
    },
  );
  return instance;
};

export default createRequestInstance;
