import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Slider, message } from 'antd'

import { getSizeImage, formatMinuteSecond, getPlaySong } from '@/utils/format-utils'

import { PlaybarWrapper, Control, PlayInfo, Operator } from './style'
import {
  getSongDetailAction,
  changeSequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
} from '../store/actionCreators'

export default memo(function AppPlayerBar() {
  //props and state
  const [currentTime, setCurrentTime] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isChange, setIsChange] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  //redux hooks
  const { currentSong, sequence, lyricList, currentLyricIndex, playList } = useSelector(
    state => ({
      currentSong: state.getIn(['player', 'currentSong']),
      sequence: state.getIn(['player', 'sequence']),
      lyricList: state.getIn(['player', 'lyricList']),
      currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
      playList: state.getIn(['player', 'playList'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  //other hooks
  const audioRef = useRef()
  useEffect(() => {
    dispatch(getSongDetailAction(167876))
  }, [dispatch])
  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current
      .play()
      .then(res => {
        setIsPlaying(true)
      })
      .catch(err => {
        setIsPlaying(false)
      })
  }, [currentSong])

  //other handle
  const picUrl = (currentSong.al && currentSong.al.picUrl) || ''
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手'
  const duration = currentSong.dt || '0'

  //   handle function
  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const timeUpdate = e => {
    const currentLyricTime = e.target.currentTime * 1000

    if (!isChange) {
      setCurrentTime(e.target.currentTime * 1000)
      setProgress((currentTime / duration) * 100)
    }

    //获取当前的歌词
    let i = 0
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i]
      if (currentLyricTime < lyricItem.time) {
        break
      }
    }
    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1))
      const content = lyricList[i - 1] && lyricList[i - 1].content
      message.open({
        key: 'lyric',
        content: content,
        duration: 0,
        className: 'lyric-class'
      })
    }
  }

  const changeSequence = () => {
    let currentSequence = sequence + 1
    if (currentSequence > 2) {
      currentSequence = 0
    }
    dispatch(changeSequenceAction(currentSequence))
  }

  const changeMusic = tag => {
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  const handleMusicEnded = () => {
    if (sequence === 2) {
      //单曲循环
      audioRef.current.currentTime = 0
      audioRef.current.play()
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  //在自定义组件中传入函数的时候用useCallback进行包裹，可以避免重构
  const sliderChange = useCallback(
    value => {
      setIsChange(true)
      const currentTime = (value / 100) * duration
      setCurrentTime(currentTime)

      setProgress(value)
    },
    [duration]
  )

  const sliderAfterChange = useCallback(
    value => {
      const currentTime = ((value / 100) * duration) / 1000
      audioRef.current.currentTime = currentTime
      setCurrentTime(currentTime * 1000)
      setIsChange(false)

      if (!isPlaying) {
        playMusic()
      }
    },
    [duration, isPlaying, playMusic]
  )

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev" onClick={e => changeMusic(-1)}></button>
          <button className="sprite_player play" onClick={e => playMusic()}></button>
          <button className="sprite_player next" onClick={e => changeMusic(1)}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to="/discover/player">
              <img src={getSizeImage(picUrl, 35)} alt=""></img>
            </NavLink>
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
                onAfterChange={sliderAfterChange}
                tooltipVisible={false}
              />
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatMinuteSecond(duration)}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop" onClick={e => changeSequence()}></button>
            <button className="sprite_player btn playlist">{playList.length}</button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={e => timeUpdate(e)} onEnded={e => handleMusicEnded()}></audio>
    </PlaybarWrapper>
  )
})
