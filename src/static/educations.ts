import type { Education } from "../types/struct";

export const educations: Array<Education> = [
    {
        period: '2019.07 - 2019.12',
        logo: {
            imageUrl: '/images/logo/naver.png',
            useBorder: false,
        },
        organizer: 'CONNECT',
        course: '웹 풀스택 개발자 부트캠프',
        summary: '알고리즘 및 컴퓨터 구조와 같은 기본 지식을 배우고, 프로젝트를 진행하며 컴퓨터와 프로그래밍의 이해를 높임',
    },
    {
        period: '2010 - 2017',
        logo: {
            imageUrl: '/images/logo/sungkyunkwan.png',
            useBorder: false,
        },
        organizer: '성균관대학교',
        course: '시스템경영공학과 (학사)',
        summary: '산업공학과의 모교식 명칭으로 프로그래밍의 기초를 다지고 통계학, 공학수학, DB, 데이터마이닝 등 다양한 과목을 이수하며 데이터에 대한 인사이트를 얻음',
    },
];
