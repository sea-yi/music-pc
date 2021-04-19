import React, { memo } from 'react'
import propTypes from 'prop-types'

import { HeaderWrapper } from './style'

const ThemeHeaderSmall = memo(function (props) {
  const { title, more } = props

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="auto">{more}</a>
    </HeaderWrapper>
  )
})

ThemeHeaderSmall.propTypes = {
  title: propTypes.string.isRequired,
  more: propTypes.string
}

export default ThemeHeaderSmall
