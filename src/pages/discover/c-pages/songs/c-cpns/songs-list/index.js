import React, { memo, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { SongsListWrapper } from './style'
import { getSongList } from '../../store/actionCreators'

import SongsCover from '@/components/songs-cover'
import PaginationC from '@/components/pagination'
import { PER_PAGE_NUMBER } from '../../store/constants'

export default memo(function SongsList() {
  const [currentPage, setCurrentPage] = useState(1)

  const { categorySongs } = useSelector(
    state => ({
      categorySongs: state.getIn(['songs', 'categorySongs'])
    }),
    shallowEqual
  )

  const songsList = categorySongs.playlists || []
  const total = categorySongs.total || 0
  const dispatch = useDispatch()

  function onPageChange(page, pageSize) {
    setCurrentPage(page)
    dispatch(getSongList(page))
  }

  return (
    <SongsListWrapper>
      <div className="songs-list">
        {songsList.map((item, index) => {
          return <SongsCover info={item} key={item.id} />
        })}
      </div>
      <PaginationC
        currentPage={currentPage}
        total={total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange}></PaginationC>
    </SongsListWrapper>
  )
})
