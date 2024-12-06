import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'

// CSS
const FooterWrapper = styled.div`
  display: flex;
  padding: 50px 0;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  line-height: 1.5;
`

// Code
const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆 <br />
      2024 Developer 2Zerozero, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
