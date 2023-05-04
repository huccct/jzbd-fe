import { get } from '../http';

export const getEnterpriceAll = params => get('/companylist/company/t/list?pageSize=4&pageNum=1');

export const getEnterpriceOne = params => get('/companylist/company/t/' + params);
