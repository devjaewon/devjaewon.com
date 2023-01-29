import type { WorkExperience } from "@/types/struct";

export const workExperiences: Array<WorkExperience> = [
    {
        period: '2022.09 - 지금',
        corp: '펫비서',
        position: '공동 창업자',
        summary: [
            '수의사, 엔지니어 지인 4명과 함께 고양이의 일상 데이터를 활용해 건강을 예측하는 펫테크 기업을 공동창업 했습니다.',
            '전반적인 소프트웨어 영역을 책임지며, 의견을 조율하고 필요한 기능에 대한 기술스택을 선정한 뒤 직접 개발을 하고 있습니다.',
        ],
        projects: [
            {
                title: '고양이 건강예측 IoT 시스템 개발',
                description: '고양이의 식사 및 배변패턴 등의 일상생활 속 건강에 영향을 주는 데이터를 이용해서, 증상이 잘 나타나지 않는 질환을 미리 판단하거나 체중을 관리하는 시스템을 개발 (수의사와 협업)',
            },
            {
                title: 'ELK 기반 로그 수집 시스템 개발',
                description: '서비스 운영에 필요한 지표, 서버 메트릭 또는 로그 등을 수집하는 시스템 개발',
            },
            {
                title: '프로모션 웹 개발',
                description: '마케팅 또는 테스터 모집을 위한 웹사이트 개발',
            },
        ],
    },
    {
        period: '2020.01 - 2022.08',
        corp: 'NAVER',
        position: '검색 FE 개발팀',
        summary: [
            '네이버 검색 서비스의 FE 개발을 전담하고, 사내 FE 오픈소스를 관리하는 팀에 소속되어 있었습니다.',
            '이미지 검색과 스마트렌즈 검색을 주로 개발 했으며, 렌더링 최적화 또는 장애 모니터링 등 서비스 전반적인 고도화도 담당 했습니다.'
        ],
        projects: [],
    }
];