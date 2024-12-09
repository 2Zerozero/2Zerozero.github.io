import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import GlobalStyle from 'components/common/GlobalStyle'
import Introduction from 'components/main/Introduction'
import Footer from 'components/common/Footer'
import CategoryList from 'components/main/CategoryList'
import PostList from 'components/main/PostList'

const CATEGORY_LIST = {
  All: 5,
  Web: 3,
  Mobile: 2,
}

// CSS
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <Container>
      <GlobalStyle />
      <Introduction />
      <CategoryList selectedCategory="Web" categoryList={CATEGORY_LIST} />
      <PostList />
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
