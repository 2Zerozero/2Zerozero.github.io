import { FunctionComponent } from 'react'

// Type
type PostTemplateProps = {}

// Component
const PostTemplate: FunctionComponent<PostTemplateProps> = props => {
  console.log(props)

  return <div>Post Template</div>
}

export default PostTemplate
