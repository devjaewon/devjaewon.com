import * as SKILL from "./skills";

export interface WorkProject {
    title: string;
    demo?: {
        videoUrl: string;
        posterUrl: string;
    }
    description: string;
    skills: Array<string>;
}

export interface WorkExperience {
    period: string;
    logo: {
        imageUrl: string;
        useBorder: boolean;
    }
    corp: string;
    position: string;
    summary: string;
    role: string;
    projects: Array<WorkProject>;
}

export const workExperiences: Array<WorkExperience> = [
    {
        period: '2022.09 -',
        logo: {
            imageUrl: '/images/logo/petbeceo.png',
            useBorder: true,
        },
        corp: '펫비서',
        position: 'Co-founder',
        summary: '고양이 의료 관련 펫테크 기업을 수의사, 로봇<센서> 엔지니어, 하드웨어 엔지니어, 임베디드 엔지니어 지인과 함께 공동창업',
        role: '일부 임베디드 영역<IoT 통신 모듈>과 응용 소프트웨어 영역<IoT 서버, 웹 서버, 앱, 웹 클라이언트>을 커뮤니케이션부터 개발까지 전반적으로 담당',
        projects: [
            {
                title: '고양이 건강관리 IoT 시스템',
                description: '고양이의 몸무게와 배변패턴을 이용하여 증상이 잘 나타나지 않는 만성질환을 미리 판단하고 관리하는 시스템을 구축',
                skills: [SKILL.FLUTTER, SKILL.GOLANG, SKILL.MQTT, SKILL.MONGODB, SKILL.ECHO, SKILL.GOOGLE_CLOUD],
            },
            {
                title: '중앙 로그 시스템',
                description: '서비스 운영에 필요한 지표와 서버 메트릭, 그리고 로그 등을 중앙 집중형으로 관리하는 시스템을 구축',
                skills: [SKILL.ELASTIC, SKILL.LOGSTASH, SKILL.KIBANA, SKILL.GRPC, SKILL.PROTOBUF, SKILL.GOOGLE_CLOUD],
            },
            {
                title: '회사 홈페이지',
                description: '회사와 팀을 소개 하거나 베타 테스터를 모집하는 홈페이지를 정적 웹페이지 기반으로 개발',
                skills: [SKILL.TYPESCRIPT, SKILL.REACT, SKILL.GATSBY, SKILL.GOOGLE_CLOUD],
            },
        ],
    },
    {
        period: '2020.01 - 2022.08',
        logo: {
            imageUrl: '/images/logo/naver.png',
            useBorder: false,
        },
        corp: '네이버',
        position: 'Search FE',
        summary: '네이버 검색의 FE 개발을 전담하고, 전사 FE 오픈소스를 관리하는 팀에서 소프트웨어를 개발',
        role: '이미지 검색과 스마트렌즈 검색의 FE 영역을 전담 했으며 렌더링 최적화, 장애 모니터링, 디자인 시스템 등 서비스 전반적인 고도화에도 참여',
        projects: [
            {
                title: '이미지 검색 / 렌즈 검색 FE',
                demo: {
                    videoUrl: 'https://assets.devjaewon.com/naver_imagesearch_demo.mp4',
                    posterUrl: 'https://assets.devjaewon.com/naver_imagesearch_poster.jpg',
                },
                description: '이미지와 이미지 상의 디텍팅 된 오브젝트 또는 텍스트(OCR) 정보를 검색하는 서비스의 FE 영역을 전담',
                skills: [SKILL.TYPESCRIPT, SKILL.CHROMIUM, SKILL.REACT, SKILL.RXJS, SKILL.NODE],
            },
            {
                title: '브라우저 에러 모니터링 시스템',
                description: 'Sentry와 Puppeteer 오픈소스를 분석하여 에러를 검색 서비스에 적합한 형태로 에러를 수집하고 시각화하는 모듈을 개발',
                skills: [SKILL.TYPESCRIPT, SKILL.SENTRY, SKILL.PUPPETEER, SKILL.GITHUB_ACTIONS],
            },
            {
                title: '사내 E2E 테스트 강의',
                description: '개인적인 E2E 테스트에 대한 고찰과 Cypress의 설계 철학, 응용법 등을 담은 초급 강좌를 개설',
                skills: [SKILL.CYPRESS],
            },
        ],
    },
    {
        period: '2017.07 - 2019.02',
        logo: {
            imageUrl: '/images/logo/naver.png',
            useBorder: false,
        },
        corp: 'NTS',
        position: 'UIT',
        summary: '네이버의 마크업 영역을 담당하며 마크업을 중심으로한 렌더링 고도화 및 최적화 하는 팀에서 소프트웨어를 개발',
        role: '네이버 쇼핑 마크업 개발을 담당 했으며, 시각적인 테스트를 고도화 하거나 wai-aria 와 css 알고리즘 리서치를 수행',
        projects: [
            {
                title: '네이버 쇼핑 마크업',
                description: '네이버 쇼핑 서비스의 다양한 웹페이지 마크업 영역을 개발',
                skills: [SKILL.W3C, SKILL.SASS, SKILL.REACT, SKILL.HTML, SKILL.CSS],
            },
            {
                title: 'jQuery 기반에서 리액트 기반으로 전환',
                description: 'HTML/jQuery/Gulp 기반 협업 구조에서 React/Webpack 기반 협업 구조로 개선',
                skills: [SKILL.GULP, SKILL.WEBPACK, SKILL.REACT, SKILL.JQUERY],
            },
            {
                title: '정적 사이트 생성기',
                description: '네이버 협업 방식에 특화된 <jQuery>와 <html:template>을 기반으로 동작하는 정적 사이트 생성기 모듈을 개발함',
                skills: [SKILL.HTML, SKILL.CSS, SKILL.JAVASCRIPT, SKILL.JQUERY],
            }
        ],
    }
];