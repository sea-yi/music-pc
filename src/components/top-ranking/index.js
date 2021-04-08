import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils'

import { TopRankingWrapper } from './style'

export default memo(function TopRankind(props) {
  const { info } = props

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)}></img>
          <a href="auto" className="image_cover">
            ranking
          </a>
        </div>
        <div className="info">
          <a href="auto">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list"></div>
      <div className="footer"></div>
    </TopRankingWrapper>
  )
})
