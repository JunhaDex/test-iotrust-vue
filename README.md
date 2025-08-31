# IoTrust 기술과제 - 김준하

## 사용한 기술 스택

- vue3, composition api, setup script
- typescript
- vite
- pinia store
- vue core
- vue i18n
- postcss
- tailwindcss
- yarn v1.22

## 프로젝트 실행 및 빌드방법 설명

1. 사전 요구사항 - 프로젝트를 가져온 후 패키지를 설치합니다.
    - nodejs 22 이상
    - yarn v1.22.x

   ```bash
   git clone https://github.com/JunhaDex/test-iotrust-vue.git
   cd test-iotrust-vue
   yarn
   ```
2. 개발 및 빌드시에는 mode 옵션을 통해 환경을 설정할 수 있습니다.
    - dev: 개발용 환경
    - stage: 스테이징 환경
    - prod: 실환경

   ```bash
   # dev 로 실시간 핫리로드 개발 서버 실행
   yarn dev --mode dev # 개발용
   yarn dev --mode stage # 스테이징
   yarn dev --mode prod # 실환경
   
   # 해당 환경으로 빌드 및 미리보기 (preview)
   yarn build --mode dev # 개발환경
   yarn build --mode stage # 스테이징
   yarn build --mode prod # 실환경
   yarn preview # 빌드 결과 preview
   ```
   
3. 언어 변경 및 UA 강제 주입

- 언어는 하단 네비게이션의 Language 메뉴를 통해 변경할 수 있습니다. (구현한 기능 정리 참고)
- 플랫폼 구분 로직은 App.vue 의 OnMounted 훅에서 처리되고, `agent.store.ts` 에 저장됩니다.

## 구현한 기능 정리

- 프로젝트 구조:
    - `src/assets`: 이미지, 폰트 등 정적 자원
    - `src/components`: 재사용 가능한 Vue 컴포넌트 [MUI 구조 참고](https://mui.com/material-ui/all-components/)
    - `src/pages`: 페이지 단위 컴포넌트
    - `src/store`: pinia 를 통한 상태관리 라이브러리
    - `src/services`: API 통신 및 비즈니스 로직
    - `src/types`: Dapp 및 Banner 데이터 구조 설계 (ts interface)
- 환경변수 Mode 설정
    - Vite 의 mode 옵션을 활용했습니다. [링크](https://ko.vite.dev/guide/env-and-mode.html#modes)
- 주어진 화면과 최대한 비슷하게 UI 를 구성하였습니다.
    - 동영상에 구현되지 않은 자연스러운 Transition 효과를 추가하였습니다.
    - PC 에서도 어색해보이지 않을 수 있도록 최대 넓이를 제한한 레이아웃을 적용하였습니다.
    - 스켈레톤 UI 를 적용하여 로딩 시 빈 화면이 보이지 않도록 하였습니다.
- 구현 기능 1. 상단 배너: 슬라이드 기능 + 슬라이드 인디케이터 + CTA 버튼 + 오토플레이 기능을 구현하였습니다.
- 구현 기능 2. 즐겨찾기 리스트 로딩 + 삭제 팝업 + 목록 비어있을 시 빈 화면
- 구현 기능 3. dapp 리스트: 언어 / 플랫폼 / 환경별로 아이템을 분류하는 필터 로직
- 구현 기능 4. 서비스 구조: API 가 있다고 가정할 경우, axios 를 통해 api 를 호출하는 구조를 설계하였습니다.
    - `api.service.ts`: 추상 클래스로 axios 인스턴스를 초기화하고 interceptor 를 설정합니다.
    - `*.service.ts`: 그 외 서비스들은 api.service.ts 를 상속받아 실질적인 API 호출 메서드 리소스에 따라 구분합니다.
    - 다량의 데이터를 가져오는 경우를 가장하여 페이지네이션 로직을 구현하였습니다.
- 구현 기능 5. 다국어 지원: 하단 Navigation 에 언어 / Language 메뉴를 추가하였습니다. 메뉴를 클릭하면 언어를 변경할 수 있습니다.
    - 언어를 변경하면 새롭게 데이터를 로딩하고 UI 를 갱신합니다.
- 구현 기능 6. 플랫폼 구분 로직: 맥OS, iOS 및 iPadOS 에서 접속할 경우 iOS 로 인식합니다. 그 외 안드로이드로 인식합니다.
- 구현 기능 7. 다크모드 지원: 가운데 Hexagon 아이콘을 클릭하면 라이트모드와 다크모드를 전환할 수 있습니다.
    - 기본 설정은 기기 설정값과 관계없이 라이트모드로 작동합니다.

## 보완할 점

- 테스트 자동화를 통해 코드 안정성을 높일 수 있습니다.
- 여러 화면에서 공통적으로 사용되는 페이지네이션 및 인피니티 스크롤의 경우 재사용 가능한 composition 로직으로 분리할 수 있습니다.
- Toast UI 를 추가하여 사용자 피드백을 강화할 수 있습니다.
- 실제 API 가 존재할 경우, 사용자 인증을 위한 토큰 관리 및 보안 로직을 추가할 수 있습니다.
- 이미지 포멧을 webp 로 변환하고 적절한 사이즈로 리사이징하여 성능을 개선할 수 있습니다.
- gzip 압축을 적용하여 네트워크 전송량을 줄일 수 있습니다.

## AI 도구 활용

- GitHub Copilot 의 코드 자동완성 기능을 활용하였습니다.
- Google Gemini AI 프롬프트를 활용하여 데이터 정리를 효율적으로 진행했습니다.

```text

This is a list of dApp information in Korean. Read the document and parse it into a JSON format (see the output sample).
- Assign a sequential id to each dApp.
- If a description is explicitly labeled "국문" or "영문", include that information in the description field. Otherwise, do not add a language label.
- Read the description. If there are mentions of a supporting language, device, or environment, populate the corresponding fields as a string array. Adhere to the following type definitions:

[Type Definitions]

type AllowPlatform = 'aos' | 'ios'
type AllowLocale = 'ko' | 'en'
type AppEnv = 'dev' | 'stage' | 'prod'

[Constraints]

Be precise and clear. Rely only on the [information] section as your source. Do not add or modify the original data. Simplify your answer.

[information]
<여기에 제공해주신 .md 파일의 내용이 평문으로 들어갑니다.>

[output sample]
<output sample 을 하나 만들어서 제공했습니다.>
```
