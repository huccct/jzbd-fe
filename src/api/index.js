// import get from './http';
// import post from './http';
import mockRequests from './mockHttp';

// 测试
export const reqTest = () => mockRequests.get(`/test`);
