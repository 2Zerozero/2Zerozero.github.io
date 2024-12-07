import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import ProfileImage from 'components/main/ProfileImage'

// CSS
const globalStyle = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 20px;
  }
`

const TextStyle = css`
  font-size: 18px;
  font-weight: 700;
  color: gray;
`

// Type
type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
      }
    }
  }
}

// Code
const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Global styles={globalStyle} />
      {title}
      {description} {author}
    </div>
  )
}

export default InfoPage

// 메타데이터
export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
