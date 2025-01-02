import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React, { FunctionComponent } from 'react'

// Type
type GatsbyImgProps = {
  image: IGatsbyImageData
  alt: string
  className?: string
}

type PostHeadProps = {
  thumbnail: IGatsbyImageData
}

// CSS
const PostHeadWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
`

const BackgroundImage = styled((props: GatsbyImgProps) => (
  <GatsbyImage {...props} style={{ position: 'absolute' }} />
))`
  z-index: -1;
  width: 100%;
  height: 400px;
  object-fit: cover;
  filter: brightness(0.25);
`

// Component
const PostHead: FunctionComponent<PostHeadProps> = function ({ thumbnail }) {
  return (
    <PostHeadWrapper>
      <BackgroundImage image={thumbnail} alt="thumbnail" />
    </PostHeadWrapper>
  )
}

export default PostHead
