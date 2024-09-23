import request from '../request'

interface IResponse {
  data: any;
}

// 获取测试数据
export const getTestData = async params => {
  const res = await request.get('http://123.207.32.32:7888/api/hy66/home/multidata', params) as IResponse;
  return Promise.resolve(res.data);
}
