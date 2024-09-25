import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { Image, Text, View } from "@tarojs/components";

import "./index.less";

const Index = memo(() => {
  // @ts-ignore
  const res = useSelector(({ photo: { data } }) => ({ data }), shallowEqual);
  const { result = [], brand = '' } = res.data as any || {} ;

  return (
    <View className={`components-res-car ${(res.data === null) && 'no-data'}`}>
      {
        res.data === null
          ?
            <View className="no-data__tip">
              <View style={{ textAlign: 'center' }}>识别失败了</View>
              <View>拍摄汽车正面识别率更高哟，请重新尝试</View>
            </View>
          :
            <>
              <Text className="brand">
                <Text className="bold red">品牌：</Text>
                {brand}
              </Text>
              {
                result.map((item, index) => (
                  <View key={index} className="item">
                    <View className="item__summary">
                      <Text className="item__summary--confidence">
                        <Text className="bold">可信度：</Text>{(item.score * 100).toFixed(2)}%
                      </Text>
                      <Text className="item__summary--year">
                        <Text className="bold">年份：</Text>{item.year}
                      </Text>
                      <Text className="item__summary--name">
                        <Text className="bold">车型：</Text>{item.name}
                      </Text>
                    </View>
                    <View className="item__pic">
                      {
                        item?.baike_info?.image_url &&
                          <Image className="item__pic--img" src={item.baike_info.image_url} mode="aspectFit" />
                      }
                    </View>
                    <View className="item__baike">
                      <Text className="item__baike--title bold">百科信息：</Text>
                      {
                        item?.baike_info?.description
                          ? <Text className="item__baike--abstract">{item.baike_info.description}</Text>
                          : <Text className="item__baike--abstract">无</Text>
                      }
                    </View>
                  </View>
                ))
              }
            </>
      }
    </View>
  );
});

export default Index;
