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
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const [count, setCount] = useState<number>(1)

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

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      if (!entries[0].isIntersecting) return

      setCount(value => value + 1)
      observer.disconnect()
    },
  )

  useEffect(() => setCount(1), [selectedCategory])

  useEffect(() => {
    if (
      NUMBER_OF_ITEMS_PER_PAGE * count >= postListByCategory.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return

    observer.observe(
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
  useInfiniteScroll 훅의 상세 작동 방식

  1. 상태 관리
  - containerRef: 스크롤 컨테이너를 참조하는 ref 객체
  - count: 현재 표시할 아이템의 페이지 수를 관리하는 state
  
  2. 카테고리별 포스트 필터링 (postListByCategory)
  - useMemo를 사용하여 선택된 카테고리에 따라 포스트 목록을 필터링
  - selectedCategory가 'All'인 경우 모든 포스트 반환
  - 특정 카테고리가 선택된 경우 해당 카테고리의 포스트만 필터링
  
  3. Intersection Observer 설정
  - 마지막 아이템이 화면에 보이는지 감지
  - 마지막 아이템이 보이면 count를 1 증가시켜 추가 아이템 로드
  - 관찰 완료 후 observer 연결 해제
  
  4. useEffect를 통한 상태 관리
  - 카테고리 변경 시 count를 1로 초기화
  - count 또는 selectedCategory 변경 시:
    * 더 표시할 아이템이 없거나
    * 컨테이너가 없거나
    * 자식 요소가 없는 경우 함수 종료
    * 그 외의 경우 마지막 요소에 observer 연결
    
  5. 반환값
  - containerRef: 스크롤 컨테이너 참조
  - postList: 현재 페이지까지의 필터링된 포스트 목록
*/
