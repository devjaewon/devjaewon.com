<div class="wrap" bind:this={elWrap} style="transform: translate3d(0, 0, 0)">
    <div class="pages">
        <div class="home page">
            <div class="bg">
                <AppBackground />
            </div>
            <div class="abount-me">
                <AboutMe />
            </div>
            <button class="btn-next" type="button" on:click={() => movePage(2)}>
                <img class="img" width="30" height="30" src="/images/icon/arrow_down.png" alt="다음">
                <span class="bar"></span>
            </button>
        </div>
        <div class="experience page">
            <div class="scroller">
                <div class="content _content">
                    <button class="btn-prev" type="button" on:click={() => movePage(1)}>
                        <img class="img" width="30" height="30" src="/images/icon/arrow_up.png" alt="이전">
                    </button>
                    <div class="section">
                        <WorkExperiences />
                    </div>
                    <div class="section">
                        <Educations />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{#if layerState !== null}
<DetailLayer state={layerState} />
{/if}
<div id="_stanbies"></div>

<script lang="ts">
import AboutMe from "./AboutMe.svelte";
import AppBackground from './AppBackground.svelte';
import WorkExperiences from "./WorkExperiences.svelte";
import Educations from './Educations.svelte';
import DetailLayer from './DetailLayer.svelte';
import { layer, LayerState } from '@store';

let layerState: LayerState | null;
let elWrap: HTMLElement;

layer.subscribe((state) => {
    layerState = state;
});

function movePage(page: number) {
    const y = -1 * (page - 1) * 100;
    const yValue = y === 0 ? y : `${y}%`;

    elWrap.style.setProperty("transform", `translate3d(0, ${yValue}, 0)`)
}
</script>

<style lang="scss">
.wrap {
    height: 100%;
    background-color: #212233;
    transition: transform 0.5s ease 0s;
    .pages {
        height: 100%;
    }
    .page {
        height: 100%;
    }
}
.home {
    position: relative;
    .bg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .btn-next {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 70px;
        text-align: center;
        .img {
            display: block;
            width: 30px;
            height: 30px;
            margin: 0 auto;
        }
        .bar {
            display: block;
            width: 40px;
            height: 5px;
            margin: 0 auto;
            border-radius: 2.5px;
            background-color: #fffefd;
        }
    }
}
.experience {
    position: relative;
    background-color: #fffefd;
    .scroller {
        height: 100%;
        padding: 0 0 30px;
        overflow-y: auto;
    }
    .btn-prev {
        display: block;
        width: 100%;
        height: 46px;
        text-align: center;
        .img {
            display: block;
            width: 30px;
            height: 30px;
            margin: 0 auto;
        }
    }
    .content {
        max-width: 620px;
        margin: 0 auto;
        .section + .section {
            margin-top: 120px;
        }
    }
}
</style>
