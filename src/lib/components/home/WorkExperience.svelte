<div class="work-experience">
    <div class="main">
        <div class="header">
            <div class="logo-wrap">
                <div class={data.logo.useBorder ? "logo use-border" : "logo"}>
                    <img
                        class="img"
                        src={data.logo.imageUrl}
                        alt=""
                        width=62
                        height=62
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
    </div>
    <div class="sub-section">
        <strong class="heading"><span class="txt">요약</span></strong>
        <div class="contents">
            <div class="content">
                <Summary paragraphs={[data.summary]} />
            </div>
        </div>
    </div>
    <div class="sub-section">
        <strong class="heading"><span class="txt">역할</span></strong>
        <div class="contents">
            <div class="content">
                <Summary paragraphs={[data.role]} />
            </div>
        </div>
    </div>
    <div class="sub-section">
        <strong class="heading"><span class="txt">주요 프로젝트</span></strong>
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
import Summary from "@components/common/atomic/Summary.svelte";
import type { WorkExperience } from "@constants";
import WorkProjectSummary from "./WorkProjectSummary.svelte";

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
.header {
    .logo-wrap {
        float: left;
        padding-right: 12px;
    }
    .logo {
        overflow: hidden;
        position: relative;
        width: 62px;
        height: 62px;
        border-radius: 50%;
        .img {
            display: block;
            width: 100%;
            height: 100%;
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
        padding-top: 2px;
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
    font-size: 17px;
    letter-spacing: 2px;
    color: #000;
}
.title {
    display: block;
    overflow: hidden;
    margin-top: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: 'GmarketSans', sans-serif;
    .txt {
        display: inline-block;
        height: 36px;
        font-weight: 700;
        vertical-align: top;
        color: #000;
    }
    .corp {
        font-size: 24px;
        line-height: 36px;
    }
    .div {
        display: inline-block;
        width: 4px;
        height: 20px;
        border-radius: 2px;
        margin: 9px 6px 0;
        background-color: #000;
        transform: rotate(20deg);
    }
    .position {
        font-size: 18px;
        line-height: 41px;
    }
}
.sub-section {
    position: relative;
    margin-top: 18px;
    border-radius: 2px;
    .heading {
        display: block;
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