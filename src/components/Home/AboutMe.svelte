<Section title="소개">
    <div slot="content">
        <div class="profile">
            <Profile />
        </div>
        <div class="content">
            <div class="summary">
                <Summary
                    paragraphs={["책과 기술을 좋아하며, 아침 운동 후 커피와 함께 책이나 메일 정리로 하루를 시작하는 것을 좋아합니다."]}
                />
            </div>
            <div class="as-engineer">
                <AccordionList
                    buttonText={"엔지니어로서"}
                    items={asEngineer}
                />
            </div>
        </div>
    </div>
</Section>

<script lang="ts">
import Section from "@/components/common/atomic/Section.svelte";
import SectionTitle from "@/components/common/atomic/SectionTitle.svelte";
import Summary from "@/components/common/atomic/Summary.svelte";
import AccordionList from "@/components/common/AccordionList.svelte";
import { asEngineer } from "@/static/asEnginner";
import Profile from "./Profile.svelte";
</script>

<style lang="scss">
.profile {
    padding-top: 32px;
}
.content {
    padding-top: 20px;
}
.as-engineer {
    margin-top: 16px;
}
</style>
