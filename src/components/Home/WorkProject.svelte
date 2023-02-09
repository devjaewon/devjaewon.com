<div class="work-project">
    <button class="button" type="button" on:click={handleClickButton}>
        <span class="text">{data.title}</span>
    </button>
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
        class="detail"
        in:transitionDetail
        out:transitionDetail
    >
        <div
            class="area-desc"
        >
            <p class="desc">{data.description}</p>
        </div>
        {#if skills.length > 0}
        <div class="area-skills">
            <ul class="skills">
                {#each skills as skill}
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
        {/if}
    </div>
    {/if}
</div>

<script lang="ts">
import { cubicInOut } from "svelte/easing";
import { skillsMap } from "@/static/skills";
import type { WorkProject } from "@/types/struct";
import type { TransitionConfig } from "svelte/types/runtime/transition";

const duration = 200;
const BIF_FIRST = 0.4;

export let data: WorkProject;

let skills: Array<string>;
let elArrow: HTMLElement;
let isOpened = false;

$ : (skills = data.skills.slice(0, 12));

function handleClickButton() {
    isOpened = !isOpened;
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
.work-project {
    position: relative;
}
.button {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 24px;
    padding-left: 23px;
    text-align: left;
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
    }
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
    margin-top: 10px;
    padding: 0 4px 14px 12px;
    .desc {
        border-radius: 2px;
        font-size: 14px;
        line-height: 1.55;
        white-space: pre-wrap;
        color: #555;
    }
}
.area-skills {
    padding: 0 4px 20px 12px;
    .skills {
        margin: -6px;
        padding: 6px 8px;
        border-radius: 2px;
        background-color: #f5f6f7;
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
}
</style>
