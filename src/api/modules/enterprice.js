import { get } from '../http';

export const getEnterpriceAll = params => get('/companylist/company/t/list');

export const getEnterpriceOne = params => get('/companylist/company/t/' + params);
