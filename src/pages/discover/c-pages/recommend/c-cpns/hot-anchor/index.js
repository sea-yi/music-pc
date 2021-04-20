import React, { memo } from 'react'

import { HotAnchorWrapper } from './style'
import ThemeHeaderSmall from '@/components/theme-header-small'
import { hotRadios } from '@/services/local-data'

export default memo(function HotAnchor() {
  return (
    <HotAnchorWrapper>
      <ThemeHeaderSmall title={'热门主播'}></ThemeHeaderSmall>
      <div className="radio-list">
        {hotRadios.map((item, index) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="auto" className="image">
                <img src={item.picUrl} alt=""></img>
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotAnchorWrapper>
  )
})
