// 소개 페이지에 사용되는 프로필 이미지

import styled from '@emotion/styled'
import { FunctionComponent } from 'react'

const PROFILE_IMAGE_LINK =
  'https://avatars.githubusercontent.com/u/82709746?s=400&u=2e8f88f953219be0d2f32c0e4f77ea4f44a81e15&v=4'

const ProfileImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;
`

const ProfileImage: FunctionComponent = function () {
  return <ProfileImageWrapper src={PROFILE_IMAGE_LINK} alt="Profile Image" />
}

export default ProfileImage
