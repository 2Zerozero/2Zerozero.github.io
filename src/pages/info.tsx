import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Text from 'components/Text'

// 인포페이지 타입
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

// 타이틀, 내용, 작성자
const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author },
    },
  },
}) {
  return (
    <div>
      <Text text={title} />
      <Text text={description} />
      <Text text={author} />
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
