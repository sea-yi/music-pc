import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'

import { TopRankingWrapper } from './style'
import { getRanking, changeCurrentIndex } from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'

export default memo(function TopRanking() {
  const state = useSelector(
    state => ({
      topList: state.getIn(['ranking', 'topList']),
      currentIndex: state.getIn(['ranking', 'currentIndex'])
    }),
    shallowEqual
  )
  const currentIndex = state.currentIndex

  const dispatch = useDispatch()

  useEffect(() => {
    const id = state.topList[currentIndex] && state.topList[currentIndex].id
    if (!id) return
    dispatch(getRanking(id))
  }, [state, dispatch, currentIndex])

  const handleItemClick = index => {
    dispatch(changeCurrentIndex(index))
    // const id = state.topList[currentIndex].id
    // dispatch(getRanking(id))
  }

  return (
    <TopRankingWrapper>
      {state.topList.map((item, index) => {
        let header
        if (index === 0 || index === 4) {
          header = <div className="header">{index === 0 ? '云音乐特色榜' : '全球媒体榜'}</div>
        }
        return (
          <div key={item.id}>
            {header}
            <div
              className={classNames('item', { active: index === currentIndex })}
              onClick={e => handleItemClick(index)}>
              <img src={getSizeImage(item.coverImgUrl, 40)} alt=""></img>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="update">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        )
      })}
    </TopRankingWrapper>
  )
})
