import { memo, useCallback } from "react";

import { chooseImage } from "@/utils/img";

import { View, Button } from "@tarojs/components";

import './index.less';

const Index = memo(() => {

  const handleClick = useCallback(() => {
    chooseImage().then(res => {
      console.log('---why chooseImage path: ', res);
    }).catch(err => {
      console.error('---why chooseImage error: ', err);
    });
  }, []);

  return (
    <View className="components-entry-btn">
      <Button className="btn" onClick={handleClick}>拍照识车</Button>
    </View>
  );
});

export default Index;
