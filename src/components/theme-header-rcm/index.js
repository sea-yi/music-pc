import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { HeaderWrapper } from './style'

const ThemeHeaderRCM = memo(function (props) {
  const { title, keywords = [] } = props
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <a href="auto">{item}</a>
                <span className="divider">|</span>
              </div>
            )
          })}
        </div>
      </div>
      <div className="right">
        <a href="auto">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})

ThemeHeaderRCM.propTypes = {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

ThemeHeaderRCM.defaultProps = {
  keywords: []
}

export default ThemeHeaderRCM

// export default memo(function ThemeHeaderRCM(props) {
//     const { title, keywords = [] } = props
//     return (
//       <HeaderWrapper className="sprite_02">
//         <div className="left">
//           <h3 className="title">{title}</h3>
//           <div className="keyword">
//             {keywords.map((item, index) => {
//               return (
//                 <div className="item" key={item}>
//                   <a href="">{item}</a>
//                   <span className="divider">|</span>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//         <div className="right">
//           <a href="">更多</a>
//           <i className="icon sprite_02"></i>
//         </div>
//       </HeaderWrapper>
//     )
//   })
