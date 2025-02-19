import { FunctionComponent, ReactNode } from 'react'
import GlobalStyle from './GlobalStyle'
import Footer from './Footer'
import styled from '@emotion/styled'
import { Helmet } from 'react-helmet'

// Type
type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

// CSS
const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

// Component
const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <Container>
      {/* SEO */}
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="2Zerozero" />
        <meta name="twitter:creator" content="2Zerozero" />

        {/* 구글 */}
        <meta
          name="google-site-verification"
          content="zlu7Dg5YSEKd5IQ17WHVKxgmjdHy8ICbWK34ycE2NKE"
        />
        {/* 네이버 */}
        <meta
          name="naver-site-verification"
          content="aea1aea67ee9b2ce923601c2a7bfe5d317acc71e"
        />

        <html lang="ko" />
      </Helmet>

      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
