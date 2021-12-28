import axios from 'axios';
import httpErrorCode from './err-code';

class HttpInterceptors {
  constructor() {
    this._axiosInstance = axios.create({
      timeout: 1000 * 5,
    });
    this.errorCode = httpErrorCode;
    this._initAxios();
  }

  // axios初始化设置
  _initAxios() {
    this._axiosInstance.defaults.headers['Content-Type'] = 'application/json';
    this._axiosInstance.defaults.baseURL = process.env.API_ROOT;
    this._axiosInstance.defaults.headers.token = '';

    // 请求拦截
    this._axiosInstance.interceptors.request.use((config) => config,
      (error) => Promise.reject(error));

    // 响应拦截
    this._axiosInstance.interceptors.response.use((response) => response,
      (error) => Promise.reject(error));
  }

  // 获取当前axios实例
  getAxiosInstance() {
    return this._axiosInstance;
  }

  errorHandle(code) {
    console.error(this.errorCode[code]);
  }
}

export default new HttpInterceptors();
