import { get, post } from '../http';

export const reqUploadAllInfo = data =>
  post(`/companybaseinfomation/companybaseinfomation/t`, data);

export const connectUsDetail = () => get('/ContactUs/ContactUs/t');
