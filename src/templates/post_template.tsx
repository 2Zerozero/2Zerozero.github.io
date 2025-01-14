import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { PostPageItemType } from 'types/PostItem.types'
import Template from 'components/Common/Template'
import PostHead from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import CommentWidget from 'components/Post/CommentWidget'

// Type
type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

// Component
const PostTemplate: FunctionComponent<PostTemplateProps> = function ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}) {
  const {
    node: {
      html,
      frontmatter: {
        title,
        summary,
        date,
        categories,
        thumbnail: {
          childImageSharp: { gatsbyImageData },
          publicURL,
        },
      },
    },
  } = edges[0]

  return (
    <Template title={title} description={summary} url={href} image={publicURL}>
      <PostHead
        title={title}
        date={date}
        categories={categories}
        thumbnail={gatsbyImageData}
      />
      <PostContent html={html} />
      <CommentWidget />
    </Template>
  )
}

export default PostTemplate

// GraphQl
export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`
/**
 * GraphQL 쿼리문 설명:
 *
 * queryMarkdownDataBySlug: 특정 slug에 해당하는 마크다운 데이터를 조회하는 쿼리
 * - $slug: URL 경로에서 추출한 문서의 고유 식별자
 *
 * allMarkdownRemark: 모든 마크다운 문서를 조회
 * - filter: slug가 일치하는 문서만 필터링
 *
 * 조회하는 데이터:
 * - html: 마크다운이 변환된 HTML 내용
 * - frontmatter: 마크다운 문서 상단의 메타데이터
 *   - title: 글 제목
 *   - summary: 글 요약
 *   - date: 작성일 (YYYY.MM.DD. 형식으로 포맷팅)
 *   - categories: 글의 카테고리 목록
 *   - thumbnail: 썸네일 이미지 정보
 *     - childImageSharp: Gatsby의 이미지 처리 결과
 *       - gatsbyImageData: 최적화된 이미지 데이터
 */
