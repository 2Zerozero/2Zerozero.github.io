import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

const IndexPage: FunctionComponent = function () {
  return (
    <div>
      <Link to="/info">To Info</Link>
    </div>
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
