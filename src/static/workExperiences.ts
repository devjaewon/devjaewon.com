import type { WorkExperience } from "@/types/struct";

export const workExperiences: Array<WorkExperience> = [
    {
        period: '2022.09 -',
        corp: '펫비서',
        position: '공동 창업자',
        summary: '수의사, 엔지니어 지인 4명과 함께 고양이의 일상 데이터를 활용해 건강을 예측하는 펫테크 기업을 공동창업 했습니다.',
        role: '소프트웨어를 전반적으로 책임지며 의견 조율, 기술스택 선정, 그리고 개발 모두 하고 있습니다.',
        projects: [
            {
                title: '고양이 건강관리 IoT 시스템',
                description: '고양이의 일상생활 속에서 수집할 수 있는 데이터를 이용해서, 증상이 잘 나타나지 않는 질환을 미리 판단하거나 체중을 관리하는 시스템을 구축했습니다. (수의사와 협업)',
            },
            {
                title: '전사 로깅 시스템',
                description: '서비스 운영에 필요한 지표, 서버 메트릭 또는 로그 등을 중앙 집중형으로 관리하는 시스템을 ELK 스택으로 구축했습니다.',
            },
            {
                title: '프로모션 웹',
                description: '마케팅 또는 베타 테스터 모집을 위한 웹사이트를 정적 웹사이트 생성기를 이용해 운영했습니다.',
            },
        ],
    },
    {
        period: '2020.01 - 2022.08',
        corp: 'NAVER',
        position: 'Search FE',
        summary: '네이버 검색 서비스의 FE 개발을 전담하고, 전사 FE 오픈소스를 관리하는 팀에서 소프트웨어를 개발했습니다.',
        role: '이미지 검색과 스마트렌즈 검색을 담당 했으며 렌더링 최적화, 장애 모니터링, 디자인 시스템 등 서비스 전반적인 고도화에도 참여 했습니다.',
        projects: [
            {
                title: '이미지 검색 / 렌즈 검색 서비스',
                description: '이미지와 이미지 상의 디텍팅 된 오브젝트 또는 텍스트(OCR) 정보를 검색하는 뷰어 모듈을 개발했습니다. 주로 고비용 DOM 렌더링&인터렉션을 최적화 작업을 했습니다.',
            },
            {
                title: 'jQuery에서 React로 서비스 프레임워크 전환',
                description: '기존에 jQuery 기반으로 구성된 검색 서비스의 여러 의존관계를 분석한 뒤 React 기반으로 전환하는 작업을 진행 했습니다. 100% React로 전환할 수 없는 상황이기에 일부 Native JS로 개발된 모듈, 라우팅 시스템과 호환 개발하는 고민을 주로 했습니다.',
            },
            {
                title: '브라우저 에러 모니터링 시스템',
                description: 'Sentry와 Puppeteer 오픈소스를 분석하여, 현재 검색 서비스에 적합한 형태로 브라우저 상 에러(네트워크, JS, 리소스)를 수집하고 시각화하는 모듈을 개발했습니다.',
            },
            {
                title: '사내 E2E 테스트 강좌 개설',
                description: '개인적인 E2E 테스트에 대한 고찰과 Cypress의 설계 철학, 응용법 등을 담은 초급 강좌를 개설했습니다.',
            },
        ],
    },
    {
        period: '2017.07 - 2019.02',
        corp: 'N Tech Service',
        position: 'UIT',
        summary: '네이버 대부분 서비스의 마크업을 최적화하고 고도화 하는 팀에서 소프트웨어를 개발했습니다.',
        role: '네이버 쇼핑 서비스의 마크업 개발을 담당했으며, 디자이너를 위한 시각적인 테스트를 자동화 했습니다.',
        projects: [
            {
                title: '네이버 쇼핑 서비스',
                description: '신규 서비스 또는 프로모션 페이지의 HTML/CSS를 개발했습니다.',
            },
            {
                title: 'HTML 기반 협업구조에서 React 기반으로 전환',
                description: 'HTML/SCSS/Gulp 베이스로 빌드해 마크업 결과를 전달하며 협업하는 구조를 React/SCSS/Webpack 베이스로 협업하는 구조로 개선했습니다.',
            },
            {
                title: 'Static Site Generator',
                description: '네이버 협업 방식에 특화된 HTML <template> 을 기반으로 동작하는 Static Site Generator를 개발했습니다.',
            }
        ],
    }
];