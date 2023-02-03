<div class="work-experience">
    <div class="main">
        <div class="heading">
            <div class="logo-wrap">
                <div class={data.logo.useBorder ? "logo use-border" : "logo"}>
                    <img
                        class="img"
                        src={data.logo.imageUrl}
                        alt=""
                        width=50
                        height=50
                    >
                </div>
            </div>
            <div class="info">
                <em class="period">{data.period}</em>
                <strong class="title">
                    <span class="corp">{data.corp}</span>
                    <span class="div"></span>
                    <span class="position">{data.position}</span>
                </strong>
            </div>
        </div>
        <div class="summary">
            <Summary paragraphs={[data.summary]} />
        </div>
    </div>
    <div class="sub-section">
        <h3 class="sub-section-title">@역할</h3>
        <div class="content">
            <Summary small={true} paragraphs={[data.role]} />
        </div>
    </div>
    <div class="sub-section">
        <h3 class="sub-section-title">@개발한 것</h3>
        {#each data.projects as project}
        <div class="content">
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
import WorkProject from "@/components/home/WorkProject.svelte";
import type { WorkExperience } from "@/types/struct";

export let data: WorkExperience = {
    period: '',
    logo: {
        imageUrl: '',
        useBorder: false,
    },
    corp: '',
    position: '',
    summary: '',
    role: '',
    projects: [],
}
</script>

<style lang="scss">
.heading {
    .logo-wrap {
        float: left;
        padding-right: 12px;
    }
    .logo {
        overflow: hidden;
        position: relative;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        .img {
            display: block;
            width: 50px;
            height: 50px;
        }
        &.use-border::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border: 1px solid rgba(0, 0, 0, 0.4);
            border-radius: 50%;
        }
    }
    .info {
        overflow: hidden;
    }
    &::after {
        content: '';
        display: block;
        clear: both;
    }
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
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        vertical-align: top;
        color: #000;
    }
    .div {
        display: inline-block;
        width: 3px;
        height: 16px;
        border-radius: 1.5px;
        margin: 6px 6px 0;
        background-color: #000;
        transform: rotate(20deg);
    }
    .position {
        display: inline-block;
        font-weight: 700;
        font-size: 20px;
        line-height: 28px;
        vertical-align: top;
        color: #000;
    }
}
.summary {
    margin-top: 12px;
}
.sub-section {
    position: relative;
    margin-top: 28px;
    padding: 18px 14px 14px;
    border: 0.5px solid #333;
    border-radius: 2px;
    .sub-section-title {
        position: absolute;
        top: -12px;
        left: 8px;
        padding: 0 8px;
        background-color: #fdfeff;
        font-weight: 300;
        font-size: 16px;
        color: #555;
    }
    .content + .content {
        margin-top: 4px;
    }
}
</style>