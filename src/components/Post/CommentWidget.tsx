import styled from '@emotion/styled'
import React, { FunctionComponent, useEffect, useRef } from 'react'

// Setting
const src = 'https://utteranc.es/client.js' // Utterances 스크립트 소스 URL
const repo = '2Zerozero/2Zerozero.github.io' // 댓글이 저장될 GitHub 레포지토리

// Type
type UtterancesAttributesType = {
  src: string
  repo: string
  'issue-term': string
  label: string
  theme: string
  crossorigin: string
  async: string
}

// CSS
const UtterancesWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`

// Component
const CommentWidget: FunctionComponent = function () {
  // 작동 방식
  // 1. div 요소에 대한 ref를 생성
  // 2. useEffect 내에서 script 엘리먼트를 생성
  // 3. 필요한 속성들을 script 엘리먼트에 설정
  // 4. ref로 참조된 div에 script 엘리먼트를 추가하여 댓글 위젯 렌더링
  const element = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (element.current === null) return

    const utterances: HTMLScriptElement = document.createElement('script')

    const attributes: UtterancesAttributesType = {
      src, // Utterances 스크립트 소스 URL
      repo, // 댓글이 저장될 GitHub 레포지토리
      'issue-term': 'pathname', // 댓글을 구분하는 기준(pathname 사용)
      label: 'Comment', // 이슈에 붙을 라벨
      theme: `github-light`, // 댓글 위젯의 테마
      crossorigin: 'anonymous', // CORS 설정
      async: 'true', // 비동기 로딩 설정
    }

    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })

    element.current.appendChild(utterances)
  }, [])

  return <UtterancesWrapper ref={element} />
}

export default CommentWidget
