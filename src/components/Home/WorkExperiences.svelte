<section class="work-experiences">
    <SectionTitle text="Work experiences" />
    <div class="list-box">
        <ul class="list">
            {#each workExperiences as workExperience}
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
    padding: 0 14px;
}
.list-box {
    margin-top: 16px;
    .item + .item {
        margin-top: 40px;
    }
}
</style>