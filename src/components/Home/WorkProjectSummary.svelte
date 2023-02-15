<div class="work-project-summary" bind:this={elRoot}>
    <a href="@" class="button" on:click={handleClickButton}>
        <span class="button-text-wrap" data-target="title">
            <span class="button-text">{data.title}</span>
        </span>
    </a>
    <span class="arrow" bind:this={elArrow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="7px" height="12px" viewBox="0 0 14 24" fill="none">
            <g>
                <path d="M2 2L12 12" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 22L12 12" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
    </span>
    {#if isOpened}
    <div
        in:transitionDetail
        out:transitionDetail
    >
        <div class="detail">
            <div class="area-desc" data-target="desc">
                <p class="desc">{data.description}</p>
            </div>
            {#if skills.length > 0}
            <div class="area-skills">
                <div class="skills">
                    <ul class="skill-list" data-target="skills">
                        {#each skills as skill}
                        {@const skillUI = skillsMap[skill]}
                        {@const width = skillUI.width < 0 ? 'auto' : `${skillUI.width}px`}
                        {@const height = skillUI.height < 0 ? 'auto' : `${skillUI.height}px`}
                        {@const imageWidth = skillUI.imageWidth < 0 ? null : skillUI.imageWidth}
                        {@const imageHeight = skillUI.imageHeight < 0 ? null : skillUI.imageHeight}
                        <li class="skill">
                            <div class="figure" style={`width:${width};height:${height}`}>
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
        <div class="area-buttons">
            <button class="btn-detail" type="button" on:click={handleClickDetailButton}>
                <span class="text">자세히 보기</span>
                <img class="icon" src="/images/icon/arrow_right.svg" width="14" height="14" alt="">
            </button>
        </div>
    </div>
    {/if}
</div>

<script lang="ts">
import { cubicInOut } from "svelte/easing";
import { skillsMap } from "@/static/skills";
import { LayerTransition } from "../common/animation/LayerTransition";
import type { WorkProject } from "@/types/struct";
import type { TransitionConfig } from "svelte/types/runtime/transition";
import { layer, LayerState } from "@/store";

const duration = 200;
const BIF_FIRST = 0.4;

export let data: WorkProject;

let skills: Array<string>;
let elRoot: HTMLElement;
let elArrow: HTMLElement;
let isOpened = false;

$ : (skills = data.skills.slice(0, 3));

function handleClickButton(e: MouseEvent) {
    e.preventDefault();
    isOpened = !isOpened;
}

function handleClickDetailButton() {
    const transition = new LayerTransition({
        fadeDuration: 200,
        moveDuration: 500,
    });
    const targets = Array.prototype.slice.call(elRoot.querySelectorAll("[data-target]")).reduce((map: {[id: string]: HTMLElement}, el: HTMLElement) => {
        map[el.getAttribute("data-target")!] = el;
        return map;
    }, {});

    transition.setContent(document.querySelector("._content") as HTMLElement);
    transition.setTargets(targets);
    transition.setStanbyContainer(document.querySelector("#_stanbies") as HTMLElement);
    layer.open(LayerState.workProjectDetail(data, transition));
}

function transitionDetail(elDesc: HTMLElement): TransitionConfig {
    return {
        delay: 0,
        duration,
        easing: cubicInOut,
        tick: (p: number, _s: number) => {
            const arrowRotateY = _computeArrowRotateY(p)
            const descOpacity = _computeDescOpacity(p);

            elArrow.style.setProperty("transform", `rotate(${arrowRotateY}deg)`);
            elDesc.style.setProperty("opacity", `${descOpacity}`);
        }
    }
}

function _computeArrowRotateY(x: number) {
    if (x > BIF_FIRST) {
        return 90;
    }
    return (x / BIF_FIRST) * 90;
}

function _computeDescOpacity(x: number) {
    if (x < BIF_FIRST) {
        return 0;
    }
    return ((x - BIF_FIRST) / (1 - BIF_FIRST)) * 1;
}
</script>

<style lang="scss">
.work-project-summary {
    position: relative;
}
.button {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 24px;
    margin-bottom: 10px;
    padding-left: 23px;
    text-align: left;
    cursor: pointer;
}
.button-text-wrap {
    display: block;
}
.button-text {
    display: block;
    width: 100%;
    overflow: hidden;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #000;
}
.arrow {
    position: absolute;
    top: 6px;
    left: 7px;
    width: 7px;
    height: 12px;
    transform-origin: center;
    svg {
        display: block;
        width: 7px;
        height: 12px;
    }
}
.area-desc {
    padding: 0 6px 14px;
    .desc {
        word-break: keep-all;
        border-radius: 2px;
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
.area-buttons {
    padding: 0 0 14px 6px;
    .btn-detail {
        display: block;
        width: 100%;
        height: 34px;
        padding-left: 2px;
        text-align: left;
        font-size: 0;
        .text {
            display: inline-block;
            height: 32px;
            font-size: 14px;
            line-height: 33px;
            color: #4285f4;
            vertical-align: middle;
        }
        .icon {
            display: inline-block;
            width: 14px;
            margin-left: 4px;
            vertical-align: middle;
        }
    }
}
</style>
