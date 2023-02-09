<Section title="교육">
    <div class="list-box" slot="content">
        <ul class="list">
            {#each educations as education}
            <li class="history-line">
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
            </li>
            <li class="item">
                <Education data={education} />
            </li>
            {/each}
        </ul>
    </div>
</Section>

<script lang="ts">
import Section from "@/components/common/atomic/Section.svelte";
import SectionTitle from "@/components/common/atomic/SectionTitle.svelte";
import Education from "./Education.svelte";
import { educations } from "@/static/educations";
</script>

<style lang="scss">
.list-box {
    margin-top: 32px;
    .history-line {
        position: relative;
        height: 80px;
        padding-top: 12px;
        &:first-child {
            display: none;
        }
        .circle {
            display: block;
            width: 4px;
            height: 4px;
            margin: 9px auto;
            border-radius: 50%;
            background-color: #cacaca;
        }
    }
}
</style>