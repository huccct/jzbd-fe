//先引入mockjs模块
import Mock from 'mockjs';
import test from './test.json';

//mock数据:第一个参数请求地址   第二个参数：请求数据
Mock.mock(`/mock/test`, 'get', () => {
  return test;
}); //模拟首页大的轮播图的数据
