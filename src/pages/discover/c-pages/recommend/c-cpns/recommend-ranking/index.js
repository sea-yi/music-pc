import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import TopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'
import { getTopListAction } from '../../store/actionCreators'

export default memo(function RecommendRanking() {
  //redux hooks
  const { upRanking, newRanking, originRanking } = useSelector(
    state => ({
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking'])
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  //other hooks
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单"></ThemeHeaderRCM>
      <div className="tops">
        <TopRanking info={upRanking}></TopRanking>
        <TopRanking info={newRanking}></TopRanking>
        <TopRanking info={originRanking}></TopRanking>
      </div>
    </RankingWrapper>
  )
})
