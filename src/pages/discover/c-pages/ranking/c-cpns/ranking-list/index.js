import React, { memo } from 'react'

import { RankingListWrapper } from './style'
import ThemeHeaderSong from '@/components/theme-header-song'

export default memo(function RankingList() {
  return (
    <RankingListWrapper>
      <ThemeHeaderSong />
    </RankingListWrapper>
  )
})
