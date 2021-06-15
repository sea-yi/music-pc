import React, { memo } from 'react'
import { shallowEqual, useSelector } from 'react-redux'

import { ThemeHeaderSongWrapper } from './style'

export default memo(function ThemeHeaderSong() {
  const state = useSelector(
    state => ({
      playList: state.getIn(['ranking', 'playList'])
    }),
    shallowEqual
  )

  return (
    <ThemeHeaderSongWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{state.playList.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{state.playList.playCount}</span>
        <span>次</span>
      </div>
    </ThemeHeaderSongWrapper>
  )
})
