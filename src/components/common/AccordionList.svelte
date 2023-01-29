<div class="accordion-list">
    <button class="button" type="button" on:click={handleClickButton}>
        <span class="text">{buttonText}</span>
    </button>
    <span class="arrow" bind:this={elArrow}>
        <svg xmlns="http://www.w3.org/2000/svg" width="7px" height="12px" viewBox="0 0 14 24" fill="none">
            <g>
                <path d="M2 2L12 12" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M2 22L12 12" stroke="#333333" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
    </span>
    <span class="bar" bind:this={elBar}></span>
    {#if isOpened}
    <div class="area-list" bind:this={elList}>
        <ul
            class="list"
            in:transitionList
            out:transitionList
        >
            {#each items as item}
            <li class="item">
                <span class="vbar"></span>
                <p class="desc">{item.text}</p>
            </li>
            {/each}
        </ul>
    </div>
    {/if}
</div>

<script lang="ts">
import { cubicInOut } from "svelte/easing"
import type { TransitionConfig } from "svelte/types/runtime/transition";

const BIF_FIRST = 0.4;
const BIF_SECOND = 0.8;

export let buttonText = '';
export let items: Array<{text: string;}> = [];
export let duration: number = 300;

let elArrow: HTMLElement;
let elBar: HTMLElement;
let elList: HTMLElement;
let isOpened = false;

function handleClickButton() {
    isOpened = !isOpened;
}

function transitionList(node: HTMLElement): TransitionConfig {
    const elItemBars = Array.prototype.slice.call(elList.querySelectorAll(".vbar"));
    const elDescriptions = Array.prototype.slice.call(elList.querySelectorAll(".desc"));
    const barH = node.offsetHeight - 18;

    return {
        delay: 0,
        duration,
        easing: cubicInOut,
        tick: (p: number, _s: number) => {
            const arrowRotateY = _computeArrowRotateY(p)
            const barHeight = _computeHeight(p, barH);
            const itemBarWidth = _computeItemBarWidth(p);
            const descOpacity = _computeDescOpacity(p);

            elArrow.style.setProperty("transform", `rotate(${arrowRotateY}deg)`);
            elBar.style.setProperty("height", `${barHeight}px`);
            elItemBars.forEach(el => {
                (el as HTMLElement).style.setProperty("width", `${itemBarWidth}px`);
            })
            elDescriptions.forEach(el => {
                (el as HTMLElement).style.setProperty("opacity", `${descOpacity}`);
            })
        }
    }
}

function _computeArrowRotateY(x: number) {
    if (x > BIF_FIRST) {
        return 90;
    }
    return (x / BIF_FIRST) * 90;
}

function _computeHeight(x: number, end: number) {
    if (x < BIF_FIRST) {
        return 0;
    }
    if (x > BIF_SECOND) {
        return end;
    }
    return ((x - BIF_FIRST) / BIF_FIRST) * end;
}

function _computeItemBarWidth(x: number) {
    if (x < BIF_SECOND) {
        return 0;
    }
    return ((x - BIF_SECOND) / (1 - BIF_SECOND)) * 14;
}

function _computeDescOpacity(x: number) {
    if (x < BIF_SECOND) {
        return 0;
    }
    return ((x - BIF_SECOND) / (1 - BIF_SECOND)) * 1;
}
</script>

<style lang="scss">
.accordion-list {
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
        display: inline-block;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        vertical-align: top;
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
.bar {
    position: absolute;
    top: 13px;
    left: 10px;
    width: 1px;
    height: 0;
    background-color: #333;
}
.area-list {
    position: relative;
    margin-top: 6px;
}
.list {
    padding-left: 10px;
    .item {
        position: relative;
        padding-left: 24px;
        .vbar {
            position: absolute;
            top: 12px;
            left: 0;
            width: 0;
            height: 1px;
            background-color: #333;
        }
        .desc {
            display: block;
            font-size: 15px;
            letter-spacing: 0.5px;
            line-height: 24px;
            color: #333;
            opacity: 0;
        }
    }
    .item + .item {
        margin-top: 2px;
    }
}
</style>