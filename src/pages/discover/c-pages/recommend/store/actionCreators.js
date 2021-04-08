import * as actionTypes from './constants'

import { getTopBanners, getHotRecommends, getNewAlbums } from '@/services/recommend'
import { getTopList } from '@/services/recommend'

const changeTopBannerAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRexommendAction = res => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = res => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums
})

const changeUpRakingAction = res => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upRanking: res.playlist
})

const changeNewRakingAction = res => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newRanking: res.playlist
})

const changeOriginRakingAction = res => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originRanking: res.playlist
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      console.log(res)
      dispatch(changeTopBannerAction(res))
    })
  }
}

export const getHotRecommendAction = limit => {
  return dispatch => {
    getHotRecommends(limit).then(res => {
      console.log(res)
      dispatch(changeHotRexommendAction(res))
    })
  }
}

// dispatch(对象)：执行reducer
// dispatch(函数)：执行函数
export const getNewAlbumAction = limit => {
  return dispatch => {
    getNewAlbums(limit).then(res => {
      console.log(res)
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = idx => {
  return dispatch => {
    getTopList(idx).then(res => {
      switch (idx) {
        case 0:
          dispatch(changeUpRakingAction(res))
          break
        case 2:
          dispatch(changeNewRakingAction(res))
          break
        case 3:
          dispatch(changeOriginRakingAction(res))
          break
        default:
      }
    })
  }
}
