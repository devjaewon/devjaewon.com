import type { Education } from "@/types/struct";

export const educations: Array<Education> = [
    {
        period: '2019.07 - 2019.12',
        logo: {
            imageUrl: '/images/logo/naver.png',
            useBorder: false,
        },
        organizer: 'CONNECT',
        course: '웹 풀스택 개발자 부트캠프',
        summary: '개발 관련 지식을 배우고, 프로젝트를 진행하며 컴퓨터와 프로그래밍을 조금 더 이해할 수 있었던 시간이었습니다.',
    },
    {
        period: '2010 - 2017',
        logo: {
            imageUrl: '/images/logo/sungkyunkwan.png',
            useBorder: false,
        },
        organizer: '성균관대학교',
        course: '시스템경영공학과 (학사)',
        summary: '산업공학과의 모교식 명칭으로 공학수학, 통계학, 데이터 분석 관련된 부분을 배우고 인사이트를 키울 수 있었습니다.',
    },
];
