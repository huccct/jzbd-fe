import { post } from '../http';

export const reqUploadAllInfo = data =>
  post(`/companybaseinfomation/companybaseinfomation/t`, data);
