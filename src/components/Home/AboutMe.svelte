<section class="about-me">
    <SectionTitle text="소개" />
    <div class="content">
        <div class="summary">
            <Summary
                paragraphs={["책과 기술을 좋아하며, 아침 운동 후 커피와 함께 책이나 메일 정리로 하루를 시작하는 것을 좋아합니다."]}
            />
        </div>
        <div class="as-engineer">
            <AccordionList
                buttonText={"개발자로서"}
                items={asEngineer}
            />
        </div>
    </div>
</section>

<script lang="ts">
import SectionTitle from "@/components/common/atomic/SectionTitle.svelte";
import Summary from "@/components/common/atomic/Summary.svelte";
import AccordionList from "@/components/common/AccordionList.svelte";
import { asEngineer } from "@/static/asEnginner";
</script>

<style lang="scss">
.about-me {
    padding: 0 16px;
}
.content {
    padding-top: 14px;
}
.as-engineer {
    margin-top: 16px;
}
</style>
