// 소개 페이지에 사용되는 프로필 이미지

import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { FunctionComponent } from 'react'

// Type
type ProfileImageProps = {
  profileImage: IGatsbyImageData
}

// CSS
const ProfileImageWrapper = styled(GatsbyImage)`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

// Component
const ProfileImage: FunctionComponent<ProfileImageProps> = function ({
  profileImage,
}) {
  return <ProfileImageWrapper image={profileImage} alt="Profile Image" />
}

export default ProfileImage
