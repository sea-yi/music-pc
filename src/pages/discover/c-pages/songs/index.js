import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { SongsWrapper } from './style'
import SongsHeader from './c-cpns/songs-header'
import SongsList from './c-cpns/songs-list'
import { useEffect } from 'react'
import { changeCurrentCategoryAction, getCategory, getSongList } from './store/actionCreators'

export default memo(function Songs() {
  const dispatch = useDispatch()
  const cat = useLocation().cat

  useEffect(() => {
    dispatch(changeCurrentCategoryAction(cat))
  }, [dispatch, cat])

  useEffect(() => {
    dispatch(getCategory())
    dispatch(getSongList(0))
  }, [dispatch])

  return (
    <SongsWrapper className="wrap-v2">
      <SongsHeader />
      <SongsList />
    </SongsWrapper>
  )
})
