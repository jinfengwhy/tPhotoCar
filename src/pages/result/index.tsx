import useShare from '@/hooks/useShare';

import { View } from '@tarojs/components'

import './index.less'

function Index () {
  useShare();

  return (
    <View className='pages-result'>
      识别结果
    </View>
  )
}

export default Index;
