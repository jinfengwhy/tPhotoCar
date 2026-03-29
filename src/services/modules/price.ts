import request from '../request'

// 获取车型价格信息
export const getPriceData = async params => {
  const url = '';
  const res = await request.post(url, {
    text: `品牌：${params.brand}，车型：${params.model}，年份：${params.year}`,
  }, {
    'Content-Type': 'application/json',
  });
  return res;
}
