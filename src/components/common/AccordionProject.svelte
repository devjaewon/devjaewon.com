<div class="accordion-description">
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
    {#if isOpened}
    <div
        class="area-desc"
        in:transitionDesc
        out:transitionDesc
    >
        <p class="desc">{description}</p>
    </div>
    {/if}
</div>

<script lang="ts">
import { cubicInOut } from "svelte/easing";
import type { TransitionConfig } from "svelte/types/runtime/transition";

const duration = 300;
const BIF_FIRST = 0.4;

export let buttonText = '';
export let description = '';

let elArrow: HTMLElement;
let isOpened = false;

function handleClickButton() {
    isOpened = !isOpened;
}

function transitionDesc(elDesc: HTMLElement): TransitionConfig {
    const barH = elDesc.offsetHeight + 17;

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
.accordion-description {
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
        font-size: 15px;
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
.area-desc {
    margin-top: 6px;
    padding-left: 10px;
    .desc {
        border-radius: 2px;
        padding: 12px 14px;
        background-color: #f3f3f3;
        font-size: 15px;
        line-height: 23px;
        white-space: pre-wrap;
        color: #333;
    }
}
</style>
