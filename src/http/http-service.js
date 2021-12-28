import HttpInterceptors from './interceptors';

export default class HttpService {
  constructor() {
    this._axios = HttpInterceptors.getAxiosInstance();
  }

  get(url, params) {
    return this._axios.get(url, {
      params: {
        ...params,
      },
    });
  }

  post(url, params) {
    return this._axios.get(url, {
      ...params,
    });
  }

  put(url, params) {
    return this._axios.put(url, {
      ...params,
    });
  }

  delete(url, params) {
    return this._axios.delete(url, {
      ...params,
    });
  }
}
