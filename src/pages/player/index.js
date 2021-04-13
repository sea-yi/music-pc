import React, { memo } from 'react'

import { PlayerWrapper, PlayerLeft, PlayerRight } from './style'

export default memo(function Player() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>playerinfo</h2>
          <h2>songcontent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>simiplaylist</h2>
          <h2>simisongs</h2>
          <h2>download</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
