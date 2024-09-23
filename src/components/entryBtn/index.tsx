import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Taro from "@tarojs/taro";

import { chooseImage } from "@/utils/img";
import { getTestAction } from "@/actions/photo";

import { View, Button } from "@tarojs/components";

import './index.less';

const Index = memo(() => {
  const [imgUrl, setImgUrl] = useState("");
  const [isIdentifying, setIsIdentifying] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!imgUrl) return;
    setIsIdentifying(true);
    // @ts-ignore
    dispatch(getTestAction({ imgUrl })).finally(() => {
      setIsIdentifying(false);
      Taro.navigateTo({
        url: '/pages/result/index'
      });
    });
  }, [dispatch, imgUrl])

  useEffect(() => {
    if (isIdentifying) {
      Taro.showLoading({
        title: '识别中...',
      })
    } else {
      Taro.hideLoading();
    }
  }, [isIdentifying])

  const handleClick = useCallback(() => {
    chooseImage().then((res: string) => {
      console.log('---why chooseImage path: ', res);
      setImgUrl(res);
    }).catch(err => {
      console.error('---why chooseImage error: ', err);
      setImgUrl("");
    });
  }, []);

  return (
    <View className="components-entry-btn">
      <Button className="btn" onClick={handleClick}>拍照识车</Button>
    </View>
  );
});

export default Index;
