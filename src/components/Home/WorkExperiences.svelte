<section class="work-experiences">
    <SectionTitle text="경력"></SectionTitle>
    <div class="list-box">
        <ul class="list">
            {#each workExperiences as workExperience}
            <li class="history-line">
                <span class="circle"></span>
                <span class="circle"></span>
                <span class="circle"></span>
            </li>
            <li class="item">
                <WorkExperience data={workExperience} />
            </li>
            {/each}
        </ul>
    </div>
</section>

<script lang="ts">
import SectionTitle from "@/components/common/atomic/SectionTitle.svelte";
import WorkExperience from "./WorkExperience.svelte";
import { workExperiences } from "@/static/workExperiences";
</script>

<style lang="scss">
.work-experiences {
    padding: 0 16px;
}
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
            width: 6px;
            height: 6px;
            margin: 8px auto;
            border-radius: 50%;
            background-color: #cacaca;
        }
    }
}
</style>