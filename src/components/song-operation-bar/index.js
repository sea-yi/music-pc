import React, { memo } from 'react'

import { SongOperationBarWrapper } from './style'

export default memo(function SongOperationBar() {
  return <SongOperationBarWrapper>
      <span>
          <a href="/">
              <span>
                  <i></i>
                  <span>播放</span>
              </span>
          </a>
          <a href="/">+</a>
      </span>
  </SongOperationBarWrapper>
})
