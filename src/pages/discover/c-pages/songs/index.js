import React, { memo } from 'react'

import { SongsWrapper } from './style'
import SongsHeader from './c-cpns/songs-header'
import SongsList from './c-cpns/songs-list'

export default memo(function Songs() {
  return (
    <SongsWrapper className="wrap-v2">
      <SongsHeader />
      <SongsList />
    </SongsWrapper>
  )
})
