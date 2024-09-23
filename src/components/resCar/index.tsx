import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { View } from "@tarojs/components";

import "./index.less";

const Index = memo(() => {
  // @ts-ignore
  const res = useSelector(({ photo: { data } }) => ({ data }), shallowEqual);

  return (
    <View className="components-res-car">
      { JSON.stringify(res) }
    </View>
  );
});

export default Index;
