import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import PostItem from './PostItem'

// Type
export type PostType = {
  node: {
    id: string
    frontmatter: {
      title: string
      summary: string
      date: string
      categories: string[]
      thumbnail: {
        publicURL: string
      }
    }
  }
}

type PostListProps = {
  posts: PostType[]
}

// CSS
const PostListWrapper = styled.div`
  display: flex;
  width: 768px;
  flex-wrap: wrap;
  gap: 20px;
  margin: 0 auto;
  padding: 50px 0 100px;

  & > * {
    flex: 1 1 calc(50% - 20px); /* 두 개의 열로 나누기 */
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 50px 20px;
  }
`

// Component
const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <PostListWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
