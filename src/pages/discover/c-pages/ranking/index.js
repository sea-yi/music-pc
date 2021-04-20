import React, { memo, useEffect } from 'react'

import TopRanking from './c-cpns/top-ranking'
import RankingHeader from './c-cpns/ranking-header'
import RankingList from './c-cpns/ranking-list'

import { RankingWrapper, RankingLeftWrapper, RankingRightWrapper } from './style'
import { getTopLists } from './store/actionCreators'
import { useDispatch } from 'react-redux'

export default memo(function Ranking() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopLists())
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeftWrapper>
        <TopRanking />
      </RankingLeftWrapper>
      <RankingRightWrapper>
        <RankingHeader />
        <RankingList />
      </RankingRightWrapper>
    </RankingWrapper>
  )
})
