import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FunctionComponent } from 'react'
import PostHeadInfo from './PostHeadInfo'
import { PostHeadInfoProps } from 'types/PostItem.types'

// Type
type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeadProps = PostHeadInfoProps & {
  thumbnail: IGatsbyImageData
}

// CSS
const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  @media (max-width: 768px) {
    height: 300px;
  }
`

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);

  @media (max-width: 768px) {
    height: 300px;
  }
`

// Component
const PostHead: FunctionComponent<PostHeadProps> = function ({
  thumbnail,
  title,
  date,
  categories,
}) {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
      <PostHeadInfo title={title} date={date} categories={categories} />
    </PostHeadWrapper>
  )
}

export default PostHead
