# Job Wanted

## Tool
* Language & Framework : React.js, React-Redux, Node.js, Express.js
* Web Skills : HTML, CSS
* Database : MongoDB

## 기획
#### 1.의도
* Server부터 View까지 직접 제작해 보기 위함
* React.js를 해봄으로써 나의 스킬을 쌓기 위함
* React-Redux를 사용해봄으로써 데이터 처리
* 헤로쿠를 이용하여 dev 서버 세팅


#### 2.페이지 구상

### View

* 회원가입
* 로그인
* 프로필 내용 기재 및 수정
* 경력 및 학력 추가
* 게시판 추가

### 주요 기능

* 회원가입, 로그인, 사용자정보 수정 및 삭제, google & facebook 로그인 (User) 
* 프로필 정보(Detail) 등록 및 수정, 검색 기능, 삭제 기능, 경력 및 학력 등록 (Profile)
* 게시판 글 올리기, 첨부파일(이미지) 추가, 좋아요 & 싫어요 기능, 댓글 기능 (Post)

### 폴더 구조

* common : 공통 함수
* component : 재사용 컴포넌트
* img : jpeg파일 보관
* reducers : 리듀서
* utils : 토큰 불러오기, 내보내기
* validation : 오류 검사
* config : 토큰 유효성 검사
* model : 데이터베이스
* route : 각 Api 구조 설계
* uploads : 첨부파일 저장

### 써드파티 패키지

| 모듈                                                                                        | 역할                                                                                                                                                                         | 사용한 부분        |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| [axios](https://github.com/axios/axios)                                                     | HTTP 클라이언트                                                                                                                                                              | -           |
| [passport](https://github.com/wonism/TIL/tree/master/back-end/nodejs/passport-example) | OAuth 인증을 간편하게 해주는 Node JS 미들웨어                                                                                                                                                                                                                                                     
| [passport-facebook-token](https://github.com/drudge/passport-facebook-token)                                                | OAuth 2.0 API를 사용하여 Facebook 액세스 토큰으로 인증  
| [passport-google-plus-token](https://github.com/ghaiklor/passport-google-plus-token)                                                | OAuth 2.0 API를 사용하여 Google Plus 액세스 토큰으로 인증                                                                                                                           
| [passport-jwt](https://github.com/motdotla/dotenv)                                                | passport를 인증하기 위한 jsonwebtoken                  
| [mongoose](https://github.com/velopert/mongoose_tutorial)                                                | RESTful API 구현을 위함 
| [multer](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)                                                | 파일 업로드를 위한 node.js 미들웨어 
| [gravatar](https://github.com/emerleite/node-gravatar)                                                | Node.js를 기반으로 Gravatar에 URL을 생성 
| [validator](https://github.com/validatorjs/validator.js?files=1)                                                | 환경변수 로드  
| [dotenv](https://github.com/motdotla/dotenv)                                                | 문자열 검사 라이브러리  
| [bcriptjs](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md)                | Node.js 암호화 모듈                                                                                                                        | -                  |
| [express](https://github.com/expressjs/express)                                             | Node.js 웹 애플리케이션 프레임워크                                                                                                                                           | -                  |
| [morgan](https://github.com/expressjs/morgan)                                               | node.js 용 HTTP 요청 로거 미들웨어                                                                                                                                                                                                                                                                            | -                  |
| [body-parser](https://github.com/expressjs/body-parser)                            | Node.js 본문 구문 분석 미들웨어                                                                                                                                                | -                  |
| [concurrently](https://github.com/kimmobrunfeldt/concurrently)                  | 여러 명령을 동시에 실행 가능                                                                                                                                                        | -                  |
| [cors](https://github.com/expressjs/cors)                                       | Node.js의 express 제공하기 위한 미들 웨어                                                                                                                                                    | -                  |
| [prop-types](https://github.com/facebook/prop-types)                                        | React props 및 유사한 객체에 대한 런타임 유형 확인                                                                                                                           | -                  |
| [react](https://github.com/facebook/react)                                                  | React는 사용자 인터페이스를 구축하기위한 JavaScript 라이브러리                                                                                                               | -                  |
| [react-dom](https://github.com/facebook/react/blob/master/packages/react-dom/README.md)     | React의 DOM 및 서버 렌더러에 대한 진입 점 역할                                                                                                                               | -                  |
| [react-helmet](https://github.com/nfl/react-helmet)                                         | HEAD에 HTML 태그 수정                                                                                                                                                        | -                  |
| [react-redux](https://github.com/reduxjs/react-redux)                                       | Redux의 공식 React 바인딩                                                                                                                                                    | -                  |
| [redux](https://github.com/reduxjs/redux)                                                   | Redux는 JavaScript 앱을위한 예측 가능한 상태 컨테이너                                                                                                                        | -                  |
| [redux-thunk](https://github.com/reduxjs/redux-thunk)                                      | Redux용 thunk 미들웨어 | - |
| [react-facebook-login](https://github.com/keppelen/react-facebook-login)                                                   | Facebook 로그인을 위한 구성요소                                                                                                                        | -                  |
| [react-google-login](https://github.com/anthonyjgrove/react-google-login)                                                   | Google 로그인을 위한 구성요소
| [react-icons-kit](https://github.com/reduxjs/redux)                                                   | icon kit                                                                                                                        | -                  |
| [react-moment](https://github.com/reduxjs/redux)                                                   | 날짜 라이브러리의 구성 요소                                                                                                                        | -                  |
| [styled-components](https://github.com/styled-components/styled-components)                 | 구성 요소 연령에 대한 시각적 기본 요소. ES6 및 CSS를 사용하여 스트레스없이 앱의 스타일을 지정                                                                                | -                  |
| [classnames](https://github.com/JedWatson/classnames)                                               | classNames를 조건부로 결합하기 위한 자바스크립트 유틸리티                                                                                                                                           | -                  |
| [jwt-decode](https://github.com/anthonyjgrove/react-google-login)                                                   | jwt-token을 디코딩하는 라이브러리

### devDependencies

| 모듈                                                                                                                      | 역할                                                                        | 사용한 부분 |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ----------- |
| [nodemon](https://github.com/remy/nodemon)                                                                                | node.js 응용 프로그램의 변경 사항을 모니터링하고 서버를 자동으로 다시 시작   | -           |

#### 3. 결과물 스크린샷
<img width="1425" alt="스크린샷 2020-02-25 오전 10 51 07" src="https://user-images.githubusercontent.com/55137934/75600863-28bbb180-5af8-11ea-9db5-b006bf6d1994.png">
<img width="1438" alt="스크린샷 2020-02-25 오전 10 52 04" src="https://user-images.githubusercontent.com/55137934/75600869-34a77380-5af8-11ea-816e-81b13da6b0b3.png">
<img width="1438" alt="스크린샷 2020-02-25 오전 10 52 17" src="https://user-images.githubusercontent.com/55137934/75600892-69b3c600-5af8-11ea-9b8f-b8850ff0a12c.png">
