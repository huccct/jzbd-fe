import { get } from '../http';

export const reqNewsPolicy = () => get(`/news/policy/t/list`);
