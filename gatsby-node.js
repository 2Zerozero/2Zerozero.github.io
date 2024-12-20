/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// Setup Import Alias
exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        // 절대 경로
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
      },
    },
  })
}

// 각 게시물 데이터마다 Slug 생성
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

/*
이 코드는 Gatsby 프로젝트의 웹팩 설정과 노드 생성을 담당하는 파일입니다.

1. exports.onCreateWebpackConfig
- 웹팩 설정을 커스터마이징하는 부분
- alias를 통해 절대 경로 설정
- components, utils, hooks 디렉토리에 대한 절대 경로 별칭 설정
- 이를 통해 import 시 상대 경로 대신 별칭 사용 가능

2. exports.onCreateNode 
- 마크다운 파일마다 고유한 slug 생성
- node.internal.type이 MarkdownRemark인 경우에만 실행
- createFilePath를 통해 파일 경로 기반으로 slug 생성
- createNodeField를 통해 생성된 slug를 노드에 추가

이러한 설정들은 Gatsby 사이트 빌드 시 필요한 기본적인 설정들을 담당합니다.
*/
