/*
 * @Author: hayyot
 * @Date: 2023-04-24 10:06:08
 * @Description: 铁沸物
 * @FilePath: \jzbd-fe\src\api\modules\home.js
 */
import { get } from '../http';

export const reqNewsPolicy = () => get(`/news/policy/t/list`);

export const reqGetHomeInfo = () => get(`/baseinfopark/park/t`);

export const reqExcellentEnterprise = () => get(`/companylist/company/t/index`);

export const contactUs = () => get(`/ContactUs/ContactUs/t`);
