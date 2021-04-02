import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannerAction } from './store/actionCreators'

function Recommend(props) {
  //组件和redux关联，获取数据和进行操作
  //shallowEqual：防止其他页面的强制刷新，影响性能
  const { topBanners } = useSelector(
    state => ({
      // topBanners: state.recommend.topBanners => 导入immutable
      // topBanners: state.recommend.get('topBanners')  =>  导入redux-immutable
      // topBanners: state.get('recommend').get('topBanners')  ==
      topBanners: state.getIn(['recommend', 'topBanners']) //先取recommend再取topBanners
    }),
    shallowEqual
  )
  const dispatch = useDispatch()

  //发送请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  return <div>Recommend:{topBanners.length}</div>
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
