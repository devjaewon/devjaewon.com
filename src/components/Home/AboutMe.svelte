<section class="about-me">
    <SectionTitle text={"About me"} />
    <div class="content">
        <div class="summary">
            <Summary
                paragraphs={["책과 기술을 좋아하며, 아침 운동 후 커피와 함께 책이나 메일 정리로 하루를 시작하는 것을 좋아합니다."]}
            />
        </div>
        <div class="as-engineer">
            <AccordionList
                buttonText={"지향점"}
                items={[
                    { text: "기술 자체보다 고객과 효용을 바라보려 합니다" },
                    { text: "지표 기반의 의사결정과 지속적 개선을 고민합니다" },
                    { text: "제품의 성장과 함께, 팀의 유대와 개개인의 성장 또한 동반되어야 한다고 생각합니다" },
                ]}
            />
        </div>
    </div>
</section>

<script lang="ts">
import SectionTitle from "@/components/common/atomic/SectionTitle.svelte";
import Summary from "@/components/common/atomic/Summary.svelte";
import AccordionList from "@/components/common/AccordionList.svelte";
</script>

<style lang="scss">
.about-me {
    padding: 0 14px;
}
.content {
    padding: 20px 4px 0;
}
.as-engineer {
    margin-top: 16px;
}
</style>
