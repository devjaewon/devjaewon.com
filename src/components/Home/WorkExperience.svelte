<div class="work-experience">
    <div class="main">
        <div class="heading">
            <div class="logo-wrap">
                <div class={data.logo.useBorder ? "logo use-border" : "logo"}>
                    <img
                        class="img"
                        src={data.logo.imageUrl}
                        alt=""
                        width=48
                        height=48
                    >
                </div>
            </div>
            <div class="info">
                <em class="period">{data.period}</em>
                <strong class="title">
                    <span class="corp txt">{data.corp}</span>
                    <span class="div"></span>
                    <span class="position txt">{data.position}</span>
                </strong>
            </div>
        </div>
        <div class="summary">
            <Summary paragraphs={[data.summary]} />
        </div>
    </div>
    <div class="sub-section">
        <h3 class="sub-section-title"><span class="txt">역할</span></h3>
        <div class="contents">
            <div class="content">
                <Summary small={true} paragraphs={[data.role]} />
            </div>
        </div>
    </div>
    <div class="sub-section">
        <h3 class="sub-section-title"><span class="txt">프로젝트</span></h3>
        <div class="contents">
            {#each data.projects as project}
            <div class="content">
                <WorkProjectSummary
                    data={project}
                />
            </div>
            {/each}
        </div>
    </div>
</div>

<script lang="ts">
import Summary from "@/components/common/atomic/Summary.svelte";
import WorkProjectSummary from "@/components/home/WorkProjectSummary.svelte";
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
        width: 48px;
        height: 48px;
        border-radius: 50%;
        .img {
            display: block;
            width: 48px;
            height: 48px;
        }
        &.use-border::after {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            border: 1px solid rgba(0, 0, 0, 0.2);
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
    .txt {
        display: inline-block;
        height: 28px;
        font-weight: 700;
        vertical-align: top;
        color: #000;
    }
    .corp {
        font-size: 20px;
        line-height: 28px;
    }
    .div {
        display: inline-block;
        width: 3px;
        height: 16px;
        border-radius: 1.5px;
        margin: 7px 6px 0;
        background-color: #000;
        transform: rotate(20deg);
    }
    .position {
        font-size: 16px;
        line-height: 31px;
    }
}
.summary {
    margin-top: 12px;
}
.sub-section {
    position: relative;
    margin-top: 18px;
    border-radius: 2px;
    .sub-section-title {
        .txt {
            display: inline-block;
            height: 26px;
            padding: 4px 8px;
            border-radius: 2px;
            background-color: #343434;
            font-family: 'GmarketSans', sans-serif;
            font-weight: 400;
            font-size: 15px;
            line-height: 18px;
            vertical-align: top;
            color: #fffefd;
        }
    }
    .content:first-child {
        margin-top: 8px;
    }
    .content + .content {
        margin-top: 4px;
    }
}
</style>