import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

// 기본 스타일 설정
const defaultStyle = css`
  * {
    margin: 0;
    padding: 0;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
