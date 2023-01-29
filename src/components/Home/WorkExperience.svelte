<section class="work-experience">
    <SectionTitle text="Work experience" />
    <div class="list-box">
        <ul class="list">
            <li class="item">
                <em class="period">2022.09 - 지금</em>
                <strong class="title">펫비서 / 공동 창업자, 소프트웨어 엔지니어</strong>
                <div class="summary">
                    <Summary
                        text={" 수의사, 엔지니어 지인 4명과 함께 펫테크 공동창업을 진행 했습니다. 고양이의 식사 및 배변패턴 등의 일상생활 속 건강정보를 이용해서 증상이 잘 나타나지 않는 질환을 미리 판단하거나 체중을 관리하는 기술을 개발했습니다."}
                    />
                </div>
                <div class="role">
                    <AccordionDescription
                        buttonText="역할"
                        description={"전반적인 소프트웨어 개발을 책임졌습니다. 의견을 조율하고 필요한 영역에 대한 기술스택을 선정해서 개발을 진행했습니다.\n\n 서비스를 위한 웹서버, IoT 데이터 수집을 위한 MQTT 서버, 중앙집중형 로그 수집 시스템, 임베디드, 서비스 앱, 프로모션 웹페이지 등 필요한 것들을 직접 개발했습니다."}
                    />
                </div>
            </li>
        </ul>
    </div>
</section>

<script lang="ts">
import SectionTitle from "@/components/common/atomic/SectionTitle.svelte";
import Summary from "@/components/common/atomic/Summary.svelte";
import AccordionDescription from "@/components/common/atomic/AccordionDescription.svelte";
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
    .role {
        margin-top: 14px;
    }
    .summary {
        margin-top: 10px;
    }
}
</style>