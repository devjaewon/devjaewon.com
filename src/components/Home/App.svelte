<div class="wrap">
    <button
        class="btn-animation-toggle"
        type="button"
        on:click={onClickBtnAnimationToggle}
    >배경 {useBackgroundAnimation ? 'OFF' : 'ON'}</button>
    <div class="header">
        <Header />
    </div>
    <div class="inner">
        {#if useBackgroundAnimation}
        <div class="bg">
            <AppBackground />
        </div>
        {/if}
        <div id="content" class="main">
            <div class="sections _content">
                <div class="section">
                    <AboutMe />
                </div>
                <div class="section">
                    <WorkExperiences />
                </div>
                <div class="section">
                    <Educations />
                </div>
            </div>
        </div>
    </div>
    {#if layerState !== null}
    <DetailLayer state={layerState} />
    {/if}
</div>
<div id="_stanbies"></div>

<script lang="ts">
import Header from '@/components/common/Header.svelte';
import AboutMe from "./AboutMe.svelte";
import AppBackground from './AppBackground.svelte';
import WorkExperiences from "./WorkExperiences.svelte";
import Educations from './Educations.svelte';
import DetailLayer from './DetailLayer.svelte';
import { layer, LayerState } from '@/store';

let useBackgroundAnimation = true;
let layerState: LayerState | null;

layer.subscribe((state) => {
    layerState = state;
});

function onClickBtnAnimationToggle() {
    useBackgroundAnimation = !useBackgroundAnimation;
}

</script>

<style lang="scss">
:global(body) {
    background-color: #333;
}
.wrap {
    position: relative;
    background-color: #333;
}
.header {
    position: absolute;
    z-index: 10000;
    top: 0;
    left: 50%;
    width: 100%;
    max-width: 500px;
    background-color: #fffefd;
    transform: translate(-50%, 0);
}
.inner {
    position: relative;
    .bg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .main {
        position: relative;
        z-index: 1;
        max-width: 500px;
        margin: 0 auto;
        padding: 52px 0 60px 0;
        background-color: #fffefd;
    }
}
.section {
    margin-top: 80px;
    &:first-child {
        margin-top: 12px;
    }
}
.btn-animation-toggle {
    position: fixed;
    z-index: 10001;
    top: 10px;
    right: 12px;
    border-radius: 1px;
    padding: 0 14px;
    background-color: #ededed;
    font-family: 'Gowun Dodum', sans-serif;
    font-weight: 700;
    font-size: 15px;
    line-height: 32px;
    cursor: pointer;
    @media screen and (max-width: 718px) {
        display: none;
    }
}
</style>
