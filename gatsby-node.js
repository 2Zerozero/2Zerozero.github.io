/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: <https://www.gatsbyjs.com/docs/node-apis/>
 */

// You can delete this file if you're not using it

const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

// 웹팩 설정
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

// 마크다운 데이터를 통한 게시물 페이지 생성
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // 마크다운 데이터 조회
  const queryAllMarkdownData = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // 오류 발생 시 오류 메시지 출력
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // 게시물 템플릿 컴포넌트 경로
  const PostTemplateComponent = path.resolve(
    __dirname,
    'src/templates/post_template.tsx',
  )

  // 게시물 페이지 생성 함수
  const generatePostPage = ({
    node: {
      fields: { slug },
    },
  }) => {
    const pageOptions = {
      path: slug,
      component: PostTemplateComponent,
      context: { slug },
    }

    createPage(pageOptions)
  }

  // 게시물 페이지 생성 및 쿼리에 대한 슬러그 전달
  queryAllMarkdownData.data.allMarkdownRemark.edges.forEach(generatePostPage)
}

/*
  코드 작동 방식 설명

  1. createPages API
  - Gatsby의 Node API 중 하나로 페이지를 프로그래밍 방식으로 생성
  - build 시점에 실행되어 정적 페이지들을 생성

  2. 마크다운 데이터 조회
  - GraphQL을 사용하여 모든 마크다운 파일의 데이터를 조회
  - frontmatter의 date와 title을 기준으로 내림차순 정렬
  - 각 마크다운 파일의 slug 정보를 가져옴

  3. 페이지 생성 프로세스
  - PostTemplateComponent: 각 게시물 페이지의 레이아웃을 담당하는 템플릿 컴포넌트 지정
  - generatePostPage 함수:
    > slug를 기반으로 각 게시물의 경로(path) 설정
    > 템플릿 컴포넌트 연결
    > context를 통해 slug 정보를 템플릿 컴포넌트에 전달
  
  4. 페이지 생성 실행
  - queryAllMarkdownData로 조회한 모든 게시물에 대해
  - generatePostPage 함수를 실행하여 각각의 페이지를 생성

  결과적으로 마크다운 파일 하나당 하나의 게시물 페이지가 생성됨
*/
