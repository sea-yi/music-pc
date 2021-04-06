import React, { memo } from 'react'

import HYTopBanner from './c-cpns/top-banner'
import HotRecommend from './c-cpns/hot-recommend'
import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from './style'

function Recommend(props) {
  return (
    <RecommendWrapper>
      <HYTopBanner></HYTopBanner>
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend></HotRecommend>
        </RecommendLeft>
        <RecommendRight></RecommendRight>
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
