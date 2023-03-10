<div class="work-project-summary" bind:this={elRoot}>
    <a href={"javascript:void(0)"} class="button" on:click={handleClickButton}>
        <div class="button-box">
            <span class="btn-txt" data-target="title">
                <span class="txt">{data.title}</span>
            </span>
        </div>
        <div class="arrow-box">
            <span class="arrow" bind:this={elArrow}>
                <img class="img" src="/images/icon/arrow_right.png" width="7" height="12" alt="펼쳐보기">
            </span>
        </div>
    </a>
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
                <span class="text">데모 및 자세히 보기</span>
                <img class="icon" src="/images/icon/arrow_right.svg" width="14" height="14" alt="">
            </button>
        </div>
    </div>
    {/if}
</div>

<script lang="ts">
import { cubicInOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/types/runtime/transition";
import { skillsMap, type WorkProject } from "@constants";
import { LayerTransition } from "@components/common/animation/LayerTransition";
import { layer, LayerState } from "@store";

const duration = 200;
const BIF_FIRST = 0.4;

export let data: WorkProject;

let skills: Array<string>;
let elRoot: HTMLElement;
let elArrow: HTMLElement;
let isOpened = false;

$ : (skills = data.skills.slice(0, 4));

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
    display: flex;
    z-index: 1;
    width: 100%;
    height: 24px;
    outline: none;
    text-align: left;
    cursor: pointer;
}
.button-box {
    flex: 1;
}
.btn-txt {
    display: block;
    height: 24px;
    .txt {
        display: inline-block;
        width: 100%;
        overflow: hidden;
        font-family: 'GmarketSans', sans-serif;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: #000;
    }
}
.arrow-box {
    flex: 0;
}
.arrow {
    display: block;
    width: 7px;
    height: 12px;
    transform-origin: center;
    .img {
        display: block;
        width: 100%;
        height: 100%;
    }
}
.detail {
    margin-top: 8px;
}
.area-desc {
    padding: 0 6px 8px;
    .desc {
        word-break: keep-all;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #555;
    }
}
.area-skills {
    padding: 0 6px 4px;
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
            font-size: 15px;
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
