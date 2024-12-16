import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/GlobalStyle'
import Introduction from 'components/main/Introduction'
import Footer from 'components/common/Footer'
import CategoryList from 'components/main/CategoryList'
import PostList from 'components/main/PostList'
import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import { IGatsbyImageData } from 'gatsby-plugin-image'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

// Type
type IndexPageProps = {
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

// CSS
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  data: {
    allMarkdownRemark: { edges },
    file: {
      childImageSharp: { gatsbyImageData },
    },
  },
}) {
  return (
    <Container>
      <GlobalStyle />
      <Introduction profileImage={gatsbyImageData} />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList posts={edges} />
      <Footer />
    </Container>
  )
}

export default IndexPage

/*
  Gatsby Link API 의 성능상 이점

  Prefetch 를 통해 리소스의 로딩 속도 향상

  > 작동방식
  페이지가 로드되면 Gatsby는 리소스 로드 속도 향상을 위해 현제 페이지에서 사용되는 모든 링크를 찾는다.
  그 후 각 링크 페이지를 미리 로드하기 시작

  이를 통하여 Gatsby 는 더 높은 사용자 경험(UX)을 제공
*/

// GraphQL
export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData(width: 768, height: 400)
              }
            }
          }
        }
      }
    }
    file(name: { eq: "profile-image" }) {
      childImageSharp {
        gatsbyImageData(width: 120, height: 120)
      }
    }
  }
`
