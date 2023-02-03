<section class="work-experiences">
    <SectionTitle text="경력"></SectionTitle>
    <div class="list-box">
        <ul class="list">
            {#each workExperiences as workExperience}
            <li class="history-line">
                <img class="icon" src="/images/arrow_up.png" width="28" height="28" alt="">
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
        &:first-child {
            display: none;
        }
        .icon {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 28px;
            height: 28px;
            margin: -14px 0 0 -14px;
        }
    }
}
</style>