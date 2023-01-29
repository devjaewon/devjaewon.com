<section class="work-experience">
    <SectionTitle text="Work experience" />
    <div class="list-box">
        <ul class="list">
            <li class="item">
                <em class="period">2022.09 - 지금</em>
                <strong class="title">펫비서 / 공동 창업자, 소프트웨어 엔지니어</strong>
                <div class="summary">
                    <Summary
                        paragraphs={[
                            '수의사, 엔지니어 지인 4명과 함께 고양이의 일상 데이터를 활용해 건강을 예측하는 펫테크 기업을 공동창업 했습니다.',
                            '전반적인 소프트웨어 영역을 책임지며, 의견을 조율하고 필요한 기능에 대한 기술스택을 선정한 뒤 직접 개발을 진행하고 있습니다.'
                        ]}
                    />
                </div>
                <div class="project">
                    <AccordionProject
                        buttonText={'고양이 체중, 배변 기반 건강예측 IoT 시스템 개발'}
                        description={'고양이의 식사 및 배변패턴 등의 일상생활 속 건강에 영향을 주는 데이터를 이용해서, 증상이 잘 나타나지 않는 질환을 미리 판단하거나 체중을 관리하는 시스템을 개발함. (수의사와 협업)'}
                    />
                </div>
                <div class="project">
                    <AccordionProject
                        buttonText="ELK 기반 로그 수집 시스템 개발"
                        description={'서비스 운영에 필요한 지표, 서버 메트릭 또는 로그 등을 수집하는 시스템 개발'}
                    />
                </div>
                <div class="project">
                    <AccordionProject
                        buttonText="프로모션 웹 개발"
                        description={'마케팅 또는 테스터 모집을 위한 웹사이트 개발'}
                    />
                </div>
            </li>
            <!-- <li class="item">
                <em class="period">2020.01 - 2022.08</em>
                <strong class="title">NAVER / 검색 FE 개발팀, 소프트웨어 엔지니어</strong>
            </li> -->
        </ul>
    </div>
</section>

<script lang="ts">
import SectionTitle from "@/components/common/atomic/SectionTitle.svelte";
import Summary from "@/components/common/atomic/Summary.svelte";
import AccordionProject from "@/components/common/AccordionProject.svelte";
</script>

<style lang="scss">
.work-experience {
    padding: 0 14px;
}
.list-box {
    margin-top: 18px;
    .item + .item {
        margin-top: 12px;
    }
    .period {
        display: block;
        font-size: 14px;
        color: #777;
    }
    .title {
        display: block;
        margin-top: 6px;
    }
    .summary {
        margin-top: 10px;
    }
    .project {
        margin-top: 16px;
    }
    .project+.project {
        margin-top: 12px;
    }
}
</style>