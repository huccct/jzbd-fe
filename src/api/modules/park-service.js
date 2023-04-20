import { get } from '../http';

export const getAllList = params => get('/news/news/t/list', params);

export const getOneList = params => get('/news/news/t/' + params);
