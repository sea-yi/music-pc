import React, { memo } from 'react'

import TopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RecommendRanking from './c-cpns/recommend-ranking'
import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'
import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'

function Recommend(props) {
  return (
    <RecommendWrapper>
      <TopBanner></TopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <RecommendRanking></RecommendRanking>
        </RecommendLeft>
        <RecommendRight>
          <UserLogin></UserLogin>
          <SettleSinger></SettleSinger>
          <HotAnchor></HotAnchor>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(Recommend)

// function Recommend(props) {
//   const { getBanners, topBanners } = props

//   useEffect(() => {
//     getBanners()
//   }, [getBanners])

//   return <div>Recommend:{topBanners.length}</div>
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
