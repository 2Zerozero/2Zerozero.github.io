import Template from 'components/common/Template'
import { FunctionComponent } from 'react'

// Type
type PostTemplateProps = {}

// Component
const PostTemplate: FunctionComponent<PostTemplateProps> = props => {
  console.log(props)

  return <Template>Post Template</Template>
}

export default PostTemplate
