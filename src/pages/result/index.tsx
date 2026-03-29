import useShare from '@/hooks/useShare';

import { View, Button } from '@tarojs/components'
import ResImage from '@/components/resImage';
import ResCar from '@/components/resCar';
import Taro from '@tarojs/taro';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPriceAction } from '@/actions/price';

import './index.less'

function Index () {
  useShare();

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  // @ts-ignore
  const photoData = useSelector(({ photo }) => photo.data);

  const handleGoToPrice = useCallback(async () => {
    if (!photoData || !photoData.result || photoData.result.length === 0) {
      Taro.showToast({
        title: '请先识别车型',
        icon: 'none',
      });
      return;
    }

    setIsLoading(true);

    try {
      // 获取第一个结果（可信度最高的）
      const carInfo = photoData.result[0];

      // 调用价格查询接口，等待结果
      await dispatch(getPriceAction({
        brand: photoData.brand,
        model: carInfo.name,
        year: carInfo.year,
      }));
    } catch (err) {
      console.error('查询价格失败:', err);
      // 失败也会继续跳转，由 Price 页面的 error 状态处理
    } finally {
      // 无论成功失败都跳转
      Taro.navigateTo({
        url: '/pages/price/index'
      });

      setIsLoading(false);
    }
  }, [dispatch, photoData]);

  useEffect(() => {
    if (isLoading) {
      Taro.showLoading({
        title: '价格查询中...',
      });
    } else {
      Taro.hideLoading();
    }
  }, [isLoading]);

  return (
    <View className='pages-result'>
      {/* 图片本身 */}
      <ResImage />

      {/* 车辆信息 */}
      <ResCar />

      {/* 查询价格按钮 */}
      <View className='price-btn-container'>
        <Button
          type='default'
          className='price-btn'
          onClick={handleGoToPrice}
          disabled={isLoading}
        >
          查询车型价格
        </Button>
      </View>
    </View>
  )
}

export default Index;
