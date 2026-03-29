import { memo } from "react";
import { useSelector } from "react-redux";

import { View, Text } from "@tarojs/components";

import "./index.less";

const Index = memo(() => {
  // 从 reducer 中获取状态
  // @ts-ignore
  const priceData = useSelector(({ price }) => price.priceData);
  // @ts-ignore
  const error = useSelector(({ price }) => price.error);

  // 渲染价格信息
  const renderPriceInfo = () => {
    if (!priceData) {
      return null;
    }

    // 获取 priceData 的所有键
    const fields = Object.keys(priceData);

    return fields.map((key) => {
      const value = priceData[key];

      if (value === undefined || value === null) {
        return null;
      }

      // 判断 key 是否包含“指导价”或“落地价”
      const highlight = /指导价|落地价/.test(key);

      return (
        <View key={key} className="info-item">
          <Text className="label">{key}：</Text>
          <Text className={`value ${highlight ? "price-value" : ""}`}>
            {String(value)}
          </Text>
        </View>
      );
    });
  };

  return (
    <View className="pages-price">
      <View className="price-content">
        {error ? (
          <View className="error-container">
            <Text className="error-tips">价格查询失败了，请稍后再试。</Text>
            {/* <Text className="error-message">{JSON.stringify(error)}</Text> */}
          </View>
        ) : (
          <View className="price-info">
            {/* 渲染价格明细 */}
            {renderPriceInfo()}
          </View>
        )}
      </View>
    </View>
  );
});

export default Index;
