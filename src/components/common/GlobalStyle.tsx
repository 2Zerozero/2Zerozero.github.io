import React, { FunctionComponent } from 'react'
import { Global, css } from '@emotion/react'

// 기본 스타일 설정
const defaultStyle = css`
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
