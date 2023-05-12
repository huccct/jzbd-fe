import { get } from '../http';

export const getEnterpriceAll = (text, page) =>
  get(`/companylist/company/t/list?pageSize=${text}&pageNum=${page}`);

export const getEnterpriceOne = params => get('/companylist/company/t/' + params);
