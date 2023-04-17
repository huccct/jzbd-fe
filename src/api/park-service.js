import { get } from './http';

export const getAllList = params => get('http://127.0.0.1:8080/news/news/t/list', params);

export const getOneList = params => get('http://127.0.0.1:8080/news/news/t/' + params);
