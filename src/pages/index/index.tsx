import useShare from '@/hooks/useShare';
import useAuth from '@/hooks/useAutho';
import useUpdate from '@/hooks/useUpdate';

import { View } from '@tarojs/components'
import UsageIntro from '@/components/usageIntro';
import EntryBtn from '@/components/entryBtn';

import './index.less'

function Index () {
  useUpdate();

  useShare();

  useAuth();

  return (
    <View className='pages-index'>
      {/* 介绍 */}
      <UsageIntro />

      {/* 入口 */}
      <EntryBtn />

      <View className='bottom-fixed-panel'>
        <View className='contact-us'>联系作者：xingzhe290@foxmail.com</View>
      </View>
    </View>
  )
}

export default Index;
