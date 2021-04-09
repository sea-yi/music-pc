import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format-utils'

import { Slider } from 'antd'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
import { getSongDetailAction } from '../store/actionCreators'

export default memo(function AppPlayerBar() {
  //props and state
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChange, setIsChange] = useState(false)

  //redux hooks
  const { currentSong } = useSelector(
    state => ({
      currentSong: state.getIn(['player', 'currentSong'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  //other hooks
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [])

  //other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
  const duration = currentSong.dt || '0'

  //   handle function
  const playMusic = () => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play()
  }

  const timeUpdate = e => {
    setCurrentTime(e.target.currentTime * 1000)
    if (!isChange) {
      setProgress((currentTime / duration) * 100)
    }
  }

  //在自定义组件中传入函数的时候用useCallback进行包裹，可以避免重构
  const sliderChange = useCallback(value => {
    setProgress(value)
  }, [])

  const sliderAfterChange = useCallback(value => {}, [])

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="auto">
              <img src={getSizeImage(picUrl, 35)} alt=""></img>
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <a href="auto" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider
                defaultValue={30}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange}></Slider>
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate}></audio>
    </PlaybarWrapper>
  )
})