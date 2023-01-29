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
        {#each data.projects as project}
        <div class="project">
            <WorkProjects
                buttonText={project.title}
                description={project.description}
            />
        </div>
        {/each}
    </div>
</div>

<script lang="ts">
import Summary from "@/components/common/atomic/Summary.svelte";
import WorkProjects from "@/components/Home/WorkProjects.svelte";
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
    font-size: 15px;
    letter-spacing: 1px;
    color: #777;
}
.title {
    display: block;
    overflow: hidden;
    margin-top: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    .corp {
        display: inline-block;
        font-size: 21px;
        line-height: 28px;
        vertical-align: top;
        color: #000;
    }
    .div {
        display: inline-block;
        width: 1px;
        height: 15px;
        margin: 9px 5px 0;
        background-color: #000;
        transform: rotate(25deg);
    }
    .position {
        display: inline-block;
        margin-top: 7px;
        font-size: 17px;
        line-height: 18px;
        vertical-align: top;
        color: #000;
    }
}
.summary {
    margin-top: 10px;
}
.area-projects {
    margin-top: 16px;
    padding: 12px 8px;
    background-color: #F8F4EA;
}
.project {
    &+& {
        margin-top: 12px;
    }
}
</style>