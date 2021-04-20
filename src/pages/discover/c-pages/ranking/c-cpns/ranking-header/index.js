import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { formatMonthDay } from '@/utils/format-utils'

import { RankingHeaderWrapper } from './style'

export default memo(function RankingHeader() {
  const state = useSelector(
    state => ({
      playList: state.getIn(['ranking', 'playList']),
      topList: state.getIn(['ranking', 'topList']),
      currentIndex: state.getIn(['ranking', 'currentIndex'])
    }),
    shallowEqual
  )
  const topInfo = state.playList
  const updateFrequency = state.topList[state.currentIndex] && state.topList[state.currentIndex].updateFrequency

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={topInfo.coverImgUrl} alt=""></img>
        {/* <span className="image_cover">封面</span> */}
      </div>
      <div className="info">
        <div className="title"></div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(topInfo.updateTime)}</div>
          <div className="update-f">（{updateFrequency}）</div>
        </div>
      </div>
    </RankingHeaderWrapper>
  )
})
