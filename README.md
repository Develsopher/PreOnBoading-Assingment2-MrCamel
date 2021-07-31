# Team Project
PreOnBoading-Assignment2-Mr.Camel

[미스터카멜](https://mrcamel.co.kr/)

## 소개
***
유저들이 어떤 상품을 관심 있어 하는지, 관심 없어하는지 그리고 유저들이 본 이력을 관리하는 페이지 구성하기


## 요구사항
***
* ClassComponent 사용하여 구현하기
* SessionStorage 또는 LocalStorage 사용해서 이력관리하기
* 외부 API 사용하지 않고, Client의 리소스만 사용하기

## 구현목록
***
### 요구사항 충족 여부

- [x] ClassComponent 사용 (state, LifeCycle 적절히 사용)

- [x] LocalStorage 채택하여 본 상품 이력관리(웹 페이지를 닫아도 이력을 계속 남기기 위해)

- [x] ProductData.json(Mock데이터) axios으로 통신

### 페이지 구성 및 구현목록 설명
####  Product Page
* `랜덤 상품 보기` 버튼 클릭 시 해당 상품 제외 후, 99개의 상품 데이터 하나씩 랜덤등장 -> LocalStorage에서 이력관리
* `관심 없어요` 버튼 클릭 시 해당 상품은 더이상 로드되지 않음
* 2번 이상 본 상품일시, 가장 최근의 시간으로 LocalStorage에서 viewTime 갱신 

#### RecentList Page
* LocalStorage에 저장되어 있는 본 상품들을 바탕으로 리스트 구성(페이징 구성없이 전체로드)
* 00시 기준으로 LocalStorage 초기화 -> 본 이력이 있는 상품 리스트 초기화
* (필터링) - 브랜드별로 상품 필터링 기능(다중선택 가능)
* (필터링) - 관심 없는 상품 숨기기 체크박스
* (정렬) - 상품들을 최근 조회순, 낮은 가격순으로 정렬
* 각 상품 클릭스 해당 상품 상세 페이지로 이동 (단, 관심 없는 상품 클릭 시 경고메시지와 함께 이동되지 않음)

#### utils 모듈사용
utils -> function 폴더에 앞으로 자주 쓰일 가능성 있는 함수 제작 및 모듈화

* 본 상품 이력을 추가해주는 함수

* 이력을 특정조건에 초기화 시켜주는 함수

* Storage에 저장되어 있는 이력을 가져오는 함수

* 이력을 Update해주는 함수

## 실행
*** 
실행환경 *Node.js v14.16.0*

    npm install
    npm start

## 시연영상
***

***
##
팀원: 강준희, 노찬욱, 채준형
