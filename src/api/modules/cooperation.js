import { get } from '../http';

export const reqParkinfoList = () => get(`/park_information/park_information/t/list`);
export const reqDetailsList = parkId => get(`/park_information/park_information/t/${parkId}`);
export const getAllList = params => get('/park_information/park_information/t/list', params);
