import * as actionTypes from './constants'

import { getTopList, getRankingList } from '@/services/ranking'

const changeTopLists = res => ({
  type: actionTypes.CHANGE_TOP_LIST,
  topList: res.list
})

const changePlayList = res => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: res.playlist
})

export const changeCurrentIndex = index => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex: index
})

export const getTopLists = () => {
  return dispatch => {
    getTopList().then(res => {
      //   console.log(res)
      dispatch(changeTopLists(res))
    })
  }
}

export const getRanking = id => {
  return dispatch => {
    getRankingList(id).then(res => {
      console.log(res)
      dispatch(changePlayList(res))
    })
  }
}
