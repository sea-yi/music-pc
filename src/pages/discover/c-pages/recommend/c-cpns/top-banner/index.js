import React, { memo, useEffect, useRef, useCallback, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd'
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'

export default memo(function TopBanner() {
  //state
  const [currentIndex, setCurrentIndex] = useState()

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

  //其他hooks
  const bannerRef = useRef()

  //发送请求
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  //其他业务逻辑
  const bgImage = topBanners[currentIndex] && topBanners[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {topBanners.map((item, index) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img className="image" src={item.imageUrl} alt={item.typeTite}></img>
                </div>
              )
            })}
          </Carousel>
          ,
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
          <button className="btn right" onClick={e => bannerRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
