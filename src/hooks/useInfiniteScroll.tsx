import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'
import { PostListItemType } from 'types/PostItem.types'

// Type
export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
}

// 페이지당 불러올 아이템 갯수
const NUMBER_OF_ITEMS_PER_PAGE = 10

// 무한 스크롤
const useInfiniteScroll = function (
  selectedCategory: string,
  posts: PostListItemType[],
): useInfiniteScrollType {
  // 스크롤 컨테이너 ref
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)

  // 스크롤 컨테이너 관찰자
  const observer: MutableRefObject<IntersectionObserver | null> =
    useRef<IntersectionObserver>(null)

  // 현재 페이지 수
  const [count, setCount] = useState<number>(1)

  // 카테고리별 포스트 필터링
  const postListByCategory = useMemo<PostListItemType[]>(
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

  // 스크롤 컨테이너 관찰자 설정
  useEffect(() => {
    observer.current = new IntersectionObserver((entries, observer) => {
      if (!entries[0].isIntersecting) return

      setCount(value => value + 1)
      observer.unobserve(entries[0].target)
    })
  }, [])

  // 카테고리 변경 시 페이지 수 초기화
  useEffect(() => setCount(1), [selectedCategory])

  // 스크롤 컨테이너 관찰자 설정
  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0 ||
      observer.current === null
    )
      return

    observer.current.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedCategory])

  return {
    containerRef,
    postList: postListByCategory.slice(0, count * NUMBER_OF_ITEMS_PER_PAGE),
  }
}

export default useInfiniteScroll

/*
이 코드는 무한 스크롤 기능을 구현하는 커스텀 훅입니다. 주요 기능은 다음과 같습니다:

1. 포스트 필터링
- selectedCategory에 따라 포스트를 필터링합니다
- 'All' 카테고리가 선택된 경우 모든 포스트를 표시
- 특정 카테고리가 선택된 경우 해당 카테고리의 포스트만 필터링

2. Intersection Observer 설정
- 스크롤 컨테이너의 마지막 요소를 관찰
- 마지막 요소가 화면에 보이면(isIntersecting) count를 1 증가시킴
- count 증가로 더 많은 포스트가 로드됨

3. 카테고리 변경 처리
- 카테고리가 변경될 때마다 count를 1로 초기화
- 새로운 카테고리의 첫 페이지부터 표시

4. 스크롤 감지 및 포스트 로드
- NUMBER_OF_ITEMS_PER_PAGE * count로 표시할 포스트 수 계산
- 컨테이너의 마지막 요소를 관찰하여 추가 로드 시점 결정
- 모든 포스트가 로드되면 추가 관찰 중지

5. 반환값
- containerRef: 스크롤 컨테이너 참조
- postList: 현재 표시할 포스트 목록
*/
