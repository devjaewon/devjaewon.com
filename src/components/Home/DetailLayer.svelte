<div class="detail-layer" bind:this={elRoot}>
    <div class="inner">
        <h3 class="title" data-target="title">
            <span class="text">{data.title}</span>
        </h3>
        <button
            class="btn-close"
            type="button"
            on:click={onClickCloseButton}
        >
            <img
                class="img"
                src="/images/icon/x.svg"
                width={32}
                height={32}
                alt="닫기"
            />
        </button>
        <div class="area-video">
            <div class="video"></div>
        </div>
        <div class="box">
            <div class="detail">
                <div class="area-desc" data-target="desc">
                    <p class="desc">{data.description}</p>
                </div>
                {#if data.skills.length > 0}
                <div class="area-skills">
                    <div class="skills">
                        <ul class="skill-list" data-target="skills">
                            {#each data.skills as skill}
                            {@const skillUI = skillsMap[skill]}
                            {@const width = skillUI.width < 0 ? 'auto' : skillUI.width}
                            {@const height = skillUI.height < 0 ? 'auto' : skillUI.height}
                            {@const imageWidth = skillUI.imageWidth < 0 ? null : skillUI.imageWidth}
                            {@const imageHeight = skillUI.imageHeight < 0 ? null : skillUI.imageHeight}
                            <li class="skill">
                                <div class="figure" style={`width:${width}px;height:${height}px`}>
                                    <img
                                        class="img"
                                        src={skillUI.imageUrl}
                                        width={imageWidth}
                                        height={imageHeight}
                                        alt={skill}
                                    >
                                </div>
                            </li>
                            {/each}
                        </ul>
                    </div>
                </div>
                {/if}
            </div>
        </div>
    </div>
</div>

<script lang="ts">
import { skillsMap } from "@/static/skills";
import type { LayerState } from "@/store";
import type { WorkProject } from "@/types";
import { onMount } from "svelte";

export let state: LayerState;
let data: WorkProject;
let elRoot: HTMLElement;

$ : data = state.data as WorkProject;

function onClickCloseButton() {
    state.transition.backward();
}

onMount(() => {
    const nexts = Array.prototype.slice.call(elRoot.querySelectorAll("[data-target]")).reduce((map: {[id: string]: HTMLElement}, el: HTMLElement) => {
        map[el.getAttribute("data-target")!] = el;
        return map;
    }, {});

    state.transition.setLayer(elRoot);
    state.transition.setNexts(nexts);
    state.transition.forward();
});
</script>

<style lang="scss">
.detail-layer {
    position: fixed;
    z-index: 9000;
    max-width: 500px;
    top: 0;
    left: 50%;
    width: 100%;
    min-height: 100vh;
    background-color: #fffefd;
    transform: translate(-50%, 0);
    opacity: 0;
    .inner {
        padding: 20px 20px;
    }
    .box {
        position: relative;
        padding: 18px 14px 14px;
        border: 0.5px solid #cacaca;
        border-radius: 2px;
    }
}
.title {
    height: 24px;
    margin-bottom: 4px;
    background-color: #fffefd;
    cursor: pointer;
    .text {
        display: block;
        width: 100%;
        overflow: hidden;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #000;
        transform: scale(1.1);
        transform-origin: left;
    }
}
.area-video {
    height: 240px;
    padding: 12px 0px 24px;
}
.video {
    height: 100%;
    background-color: #f2f2f2;
}
.area-desc {
    padding: 0 6px 14px;
    .desc {
        border-radius: 2px;
        word-break: keep-all;
        font-size: 14px;
        line-height: 1.55;
        color: #555;
    }
}
.area-skills {
    padding: 0 6px 12px;
}
.skills {
    background-color: #f5f6f7;
}
.skill-list {
    padding: 6px 8px;
    border-radius: 2px;
}
.skill {
    display: inline-block;
    margin: 6px;
    vertical-align: top;
}
.figure {
    &::before {
        content: '';
        display: inline-block;
        width: 0;
        height: 100%;
        vertical-align: middle;
    }
    .img {
        display: inline-block;
        vertical-align: middle;
    }
}
.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    width: 62px;
    height: 62px;
    cursor: pointer;
    .img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        width: 32px;
        height: 32px;
        margin: auto;
    }
}
</style>
