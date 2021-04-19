import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getSettleSingersAction } from '../../store/actionCreators'

import { SettleSingerWrapper } from './style'
import ThemeHeaderSmall from '@/components/theme-header-small'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function SettleSinger() {
  const dispatch = useDispatch()

  const state = useSelector(
    state => ({
      settleSingers: state.getIn(['recommend', 'settleSingers'])
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(getSettleSingersAction())
  }, [dispatch])

  return (
    <SettleSingerWrapper>
      <ThemeHeaderSmall title={'入驻歌手'} more={'查看全部>'}></ThemeHeaderSmall>

      <div className="single-list">
        {state.settleSingers.map((item, index) => {
          return (
            <a href="auto" key={item.id} className="item">
              <img src={getSizeImage(item.img1v1Url, 62)}></img>
              <div className="info">
                <div className="title">{item.alias.join('') || item.name}</div>
                <div className="name">{item.name}</div>
              </div>
            </a>
          )
        })}
      </div>

      <div className="apply-for">
        <a href="auto">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
})
