import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators'

import ThemeHeaderRCM from '@/components/theme-header-rcm'

export default memo(function NewAlbum() {
  const [albums, setAlbums] = useState([])

  //redux hooks
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  return (
    <div>
      <ThemeHeaderRCM title="新碟上架"></ThemeHeaderRCM>
      <div></div>
    </div>
  )
})
