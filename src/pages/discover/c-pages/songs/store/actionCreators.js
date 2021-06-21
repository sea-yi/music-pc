import { getSongCategory, getSongCategoryList } from '@/services/songs'

import { handleSongsCategory } from '@/utils/handle-data'

import * as actionTypes from './constants'
import { PER_PAGE_NUMBER } from './constants'

const changeCategoryAction = res => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: res
})

const changeSongListAction = res => ({
  type: actionTypes.CHANGE_CATEGORY_SONGS,
  category: res
})

export const changeCurrentCategoryAction = name => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name
})

export const getCategory = () => {
  return dispatch => {
    getSongCategory().then(res => {
      console.log(res)
      const categoryData = handleSongsCategory(res)
      dispatch(changeCategoryAction(categoryData))
    })
  }
}

export const getSongList = page => {
  return (dispatch, getState) => {
    //1.获取currentCategory
    const name = getState().getIn(['songs', 'currentCategory'])

    //2.获取数据
    getSongCategoryList(name, page * PER_PAGE_NUMBER).then(res => {
      dispatch(changeSongListAction(res))
    })
  }
}
