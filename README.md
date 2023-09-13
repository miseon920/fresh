# nextjs 13버전

- 폴더기반 자동라우팅

- 새로디자인한 서버API 기능

- 쉬운 DB연결

- 직관적인 rendering 전략 선택기능 

- hydration없는 server-side rendering

- 파워풀한 캐싱

- 이미지와 폰트 최적화


# 개발 환경 셋팅
- nodejs 설치(lts버전 - node 18버전이상)
- vscode 에디터 설치
- nextjs 설치 (npx create-next-app@latest)

# 폴더 설명
- app 폴더 : 코드짤 폴더 

- page.js : 메인페이지 (typescript를 쓰고 싶다면 tsx로 확장자를 바꾸면 된다.) 

- layout.js : 메인페이지 감싸는 용도의 페이지

- public 폴더 : 이미지나 static 파일 보관용 

- api 폴더 : 서버기능 만드는 곳 

- next.config.js : nextjs 설정 파일 

- node_modules 폴더 : 설치한 라이브러리 보관용 폴더 

- package.json : 설치한 라이브러리 버전 기록용 파일


# 더알아가기 문법
- ```XXX.module.css``` 특정페이지에서만 적용가능
- style 넣고 싶으면 object 자료형으로 style={ } 안에 넣어야함 ```style={{ color: 'red'}}```
- scss로 쓰고 싶다면 확장자 변경 및 설치 ```npm i sass``` 
- 라이브러리 설치 후 노드 재시작
- 페이지 나누는걸(url로 페이지를 나누는 것) 전문용어로 라우팅이라함(rest api 작명법을 참고하여 url 작명) - qpp 폴더 아래 폴더명이 자동으로 url 명이 됨(page.tsx가 메인페이지이다)
- 레이아웃의 경우 중첩 레이아웃 원리로 이루어져 있다. 상위의 모든 레이아웃을 합치고 마지막 옆의 레이아웃도 합치게 된다. (```{children} ``` 부분이 page.tsx가 담기는 부분)"# fresh" 
