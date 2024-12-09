import styled from '@emotion/styled'
import { FunctionComponent } from 'react'
import PostItem from './PostItem'

// Dummydata
const POST_ITEM_DATA = {
  title: 'Post Item Title',
  date: '2020.01.29.',
  categories: ['Web', 'Frontend', 'Testing'],
  summary:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident repellat doloremque fugit quis rem temporibus! Maxime molestias, suntrem debitis odit harum impedit. Modi cupiditate harum dignissimos eos in corrupti!',
  thumbnail:
    'https://github.com/2Zerozero/2zerozero.blog/blob/master/static/thumbnail/Javascript_Thumbnail.png?raw=true',
  link: 'https://www.google.co.kr/',
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
`

// Component
const PostList: FunctionComponent = function () {
  return (
    <PostListWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostListWrapper>
  )
}

export default PostList
