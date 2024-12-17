---
date: '2020-07-29'
title: 'Gatsby Post Test'
categories: ['Test']
summary: '블로그 게시글 테스트를 진행해보자'
thumbnail: './test.png'
---

### 게시글 테스트를 진행해보자.

직접 블로그를 만들어나가며, 게시글 테스트를 진행한다.

별 문제없이 잘 만들어지길 바라며.. 게시글을 작성중이다.

제발!!!!

### 무엇이 문제였을까.. 에러가 발생했다.

```
{
  "errors": [
    {
      "message": "Cannot query field \"allMarkdownRemark\" on type \"Query\".",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ]
    }
  ]
}
```

라는 에러가 발생했다.

하지만 해결했다.

터미널을 껐다가 다시 재가동하여 Graphql 을 실행하니 Query 가 잘 받아와진다.

휴..
