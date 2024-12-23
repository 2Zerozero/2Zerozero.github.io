import { FunctionComponent, ReactNode } from 'react'
import GlobalStyle from './GlobalStyle'
import Footer from './Footer'
import styled from '@emotion/styled'

// Type
type TemplateProps = {
  children: ReactNode
}

// CSS
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

// Component
const Template: FunctionComponent<TemplateProps> = ({ children }) => {
  return (
    <Container>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
