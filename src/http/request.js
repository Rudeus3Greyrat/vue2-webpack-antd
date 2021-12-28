import HttpService from './http-service';
import api from './api';

const HTTP = new HttpService();

export const login = (params) => HTTP.get(api.login, params);

export const login2 = (params) => HTTP.get(api.login, params);
