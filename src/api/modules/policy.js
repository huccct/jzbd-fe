import { post, get } from '../http';

export const uploadFile = (params, options) =>
  post(`/companyinfo/companyinfo/t/upload/minio`, params, options);
export const uploadCompany = params => post(`/companyinfo/companyinfo/t`, params);
export const policyInformation = params => get(`/news/policy/t/list`, params);
export const policyDetailInformation = (url, params) => get(url, params);
