// 카테고리 리스트
import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

export type CategoryListProps = {
  selectedCategory: String
  categoryList: {
    // 키는 문자열, 값은 숫자로 타입 표기
    [key: string]: number
  }
}

//CSS
const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 100px auto 0;
`

//Code
const CategoryList: FunctionComponent<CategoryListProps> = function ({
  selectedCategory,
  categoryList,
}) {
  return (
    <CategoryListWrapper>
      {/* Object.entries 객체의 키-값 쌍을 배열 형태로 반환 */}
      {Object.entries(categoryList).map(([name, count]) => (
        <div key={name}>
          #{name}({count})
        </div>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
