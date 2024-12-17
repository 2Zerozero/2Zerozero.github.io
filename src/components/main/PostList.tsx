import styled from '@emotion/styled'
import { FunctionComponent, useMemo } from 'react'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'

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
  // postListDate
  // 만약 선택된 카테고리가 존재하면서 All이 아닌 경우에는 해당 카테고리 값을 가진 포스트 아이템만 필터링,
  // 그렇지 않은 경우에는 모든 포스트 아이템을 보여주도록 구현
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { categories },
          },
        }: PostListItemType) =>
          selectedCategory !== 'All'
            ? categories.includes(selectedCategory)
            : true,
      ),
    [selectedCategory],
  )
  return (
    <PostListWrapper>
      {postListData.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostListWrapper>
  )
}

export default PostList
