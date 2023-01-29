<div class="work-experience">
    <div class="main">
        <em class="period">{data.period}</em>
        <strong class="title">
            <span class="corp">{data.corp}</span>
            <span class="div"></span>
            <span class="position">{data.position}</span>
        </strong>
        <div class="summary">
            <Summary paragraphs={data.summary} />
        </div>
    </div>
    <div class="area-projects">
        <h3 class="project-title">@What i did</h3>
        {#each data.projects as project}
        <div class="project">
            <WorkProject
                buttonText={project.title}
                description={project.description}
            />
        </div>
        {/each}
    </div>
</div>

<script lang="ts">
import Summary from "@/components/common/atomic/Summary.svelte";
import WorkProject from "@/components/Home/WorkProject.svelte";
import type { WorkExperience } from "@/types/struct";

export let data: WorkExperience = {
    period: '',
    corp: '',
    position: '',
    summary: [],
    projects: [],
}
</script>

<style lang="scss">
.main {
    padding: 0 4px;
}
.period {
    display: block;
    font-weight: 300;
    font-size: 15px;
    letter-spacing: 1px;
    color: #000;
}
.title {
    display: block;
    overflow: hidden;
    margin-top: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    .corp {
        display: inline-block;
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        vertical-align: top;
        color: #000;
    }
    .div {
        display: inline-block;
        width: 2px;
        height: 15px;
        border-radius: 1.5px;
        margin: 8px 6px 0;
        background-color: #000;
        transform: rotate(20deg);
    }
    .position {
        display: inline-block;
        margin-top: 7px;
        font-weight: 500;
        font-size: 17px;
        line-height: 18px;
        vertical-align: top;
        color: #000;
    }
}
.summary {
    margin-top: 16px;
}
.area-projects {
    position: relative;
    margin-top: 28px;
    padding: 18px 14px 14px;
    border: 0.5px solid #333;
    .project-title {
        position: absolute;
        top: -12px;
        left: 8px;
        padding: 0 8px;
        background-color: #fdfeff;
        font-weight: 300;
        font-size: 16px;
        color: #777;
    }
}
.project {
    &+& {
        margin-top: 4px;
    }
}
</style>