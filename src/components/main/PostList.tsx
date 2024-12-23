import styled from '@emotion/styled'
import { FunctionComponent, useMemo } from 'react'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

// Type
type PostListProps = {
  selectedCategory: string
  posts: PostListItemType[]
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
const PostList: FunctionComponent<PostListProps> = function ({
  selectedCategory,
  posts,
}) {
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedCategory,
    posts,
  )

  return (
    <PostListWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostListWrapper>
  )
}

export default PostList
