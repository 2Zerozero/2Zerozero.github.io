import styled from '@emotion/styled'
import React, { FunctionComponent } from 'react'

// Type
interface PostContentProps {
  html: string
}

// CSS
const MarkdownRenderer = styled.div`
  // 랜더링 스타일
  display: flex;
  flex-direction: column;
  width: 768px;
  margin: 0 auto;
  padding: 100px 0;
  word-break: break-all;

  // 마크다운 스타일
  line-height: 1.8;
  font-size: 16px;
  font-weight: 400;

  // 모든 요소에 패딩 속성 적용
  p {
    padding: 3px 0;
  }

  // 헤딩 요소 스타일 조정
  h1,
  h2,
  h3 {
    font-weight: 800;
    margin-bottom: 30px;
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: 80px;
  }

  hr + h1,
  hr + h2,
  hr + h3 {
    margin-top: 0;
  }

  h1 {
    font-size: 30px;
  }

  h2 {
    font-size: 25px;
  }

  h3 {
    font-size: 20px;
  }

  // 견적 요소 스타일 조정
  blockquote {
    margin: 30px 0;
    padding: 5px 15px;
    border-left: 2px solid #000000;
    font-weight: 800;
  }

  // 목록 요소 스타일 조정
  ol,
  ul {
    margin-left: 20px;
    padding: 30px 0;
  }

  // 수평선 스타일 조정
  hr {
    border: 1px solid #000000;
    margin: 100px 0;
  }

  // 링크 요소 스타일 조정
  a {
    color: #4263eb;
    text-decoration: underline;
  }

  // 코드 스타일 조정
  // pre[class*='language-'] 선택자는 클래스 이름에 'language-'가 포함된 모든 pre 태그를 선택.
  // 예: <pre class="language-javascript">, <pre class="language-python"> 등을 모두 선택
  pre[class*='language-'] {
    margin: 30px 0;
    padding: 15px;
    font-size: 15px;

    ::-webkit-scrollbar-thumb {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 3px;
    }
  }

  // code[class*='language-'] 선택자도 마찬가지로 클래스 이름에 'language-'가 포함된 모든 code 태그를 선택.
  // 이 스타일은 주로 Prism.js나 다른 코드 하이라이팅 라이브러리와 함께 사용.
  code[class*='language-'],
  pre[class*='language-'] {
    tab-size: 2;
  }

  // 마크다운 반응형 디자인
  @media (max-width: 768px) {
    width: 100%;
    padding: 80px 20px;
    line-height: 1.6;
    font-size: 14px;

    h1 {
      font-size: 23px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 17px;
    }

    img {
      width: 100%;
    }

    hr {
      margin: 50px 0;
    }
  }
`

// Component
const PostContent: FunctionComponent<PostContentProps> = function ({ html }) {
  return <MarkdownRenderer dangerouslySetInnerHTML={{ __html: html }} />
}

export default PostContent
