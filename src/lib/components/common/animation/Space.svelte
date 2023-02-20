<canvas class="canvas" bind:this={elCanvas}></canvas>

<script lang="ts">
import { onMount, onDestroy } from "svelte";
import { browser } from "$app/environment";
import { debounce, rand } from "@utils";
import { MeteorAnimation, type Meteor } from "./MeteorAnimation";
import { StarsAnimation, type Star } from "./StarsAnimation";
import { SunAnimation, type Sun } from "./SunAnimation";

export let starsCount = 120;
export let meteorsCount = 2;

let elCanvas: HTMLCanvasElement;
const _ = {
    elWrap: null as unknown as HTMLElement,
    wrapResizeObserver: null as unknown as ResizeObserver,
    ctx: null as unknown as CanvasRenderingContext2D,
    contentWidth: 0,
    width: 0,
    height: 0,
    starsAnimation: null as unknown as StarsAnimation,
    meteorAnimation: null as unknown as MeteorAnimation,
    sunAnimation: null as unknown as SunAnimation,
    play: false,
};

const handleResize = debounce(() => {
    initSize();
});

onMount(() => {
    if (isNotSupport()) return;
    _.ctx = elCanvas.getContext("2d")!;
    _.elWrap = elCanvas.parentElement as HTMLElement;
    if (ResizeObserver) {
        _.wrapResizeObserver = new ResizeObserver(handleResize);
    }
    initSize();
    initStarsAnimation();
    initMeteorAnimation();
    initSunAnimation().then(() => {
        _.wrapResizeObserver.observe(_.elWrap);
        _.play = true;
        requestAnimationFrame(draw)
    });
});

onDestroy(() => {
    if (isNotSupport()) return;
    _.wrapResizeObserver.disconnect();
    _.play = false;
});

function isNotSupport() {
    return !browser || !requestAnimationFrame;
}

function initSize() {
    if (!elCanvas.parentElement) {
        throw new Error('invalid animation render');
    }

    _.width = elCanvas.parentElement.clientWidth;
    _.height = elCanvas.parentElement.clientHeight;
    elCanvas.width = _.width;
    elCanvas.height = _.height;
    elCanvas.style.setProperty("width", `${_.width}px`);
    elCanvas.style.setProperty("height", `${_.height}px`);

    const elContent = document.getElementById("content");
    if (elContent) {
        _.contentWidth = elContent.clientWidth;
    }
}

function initStarsAnimation() {
    const starFactory = (): Star => {
        return {
            radius: rand(0.8, 2),
            ix: rand(0, _.width),
            rx: rand(0.001, 0.003),
            wx: rand(0, 15),
            iy: rand(0, 1) * _.height,
            dy: rand(0.03, 0.1),
            opacity: rand(0.1, 1),
        }
    }

    _.starsAnimation = new StarsAnimation(
        starFactory,
        starsCount,
        (x: number, y: number) => y > _.height,
    );
}

async function initSunAnimation() {
    const sunFactory = (): Sun => {
        const x = 50;
        const sun: Sun = {
            x,
            y: 50,
            radius: 16,
            arround: {
                radius: 24,
                rotateVelocity: 0.05,
            },
        };

        return sun;
    }

    _.sunAnimation = new SunAnimation(sunFactory);

    return _.sunAnimation.init();
}

function initMeteorAnimation() {
    const meteorFactory = (i: number): Meteor => {
        const radius = rand(1.5, 3.2);
        return {
            radius,
            degree: rand(140, 165),
            ix: _.width,
            iy: rand(_.height * -0.3, _.height * 0.8),
            d: rand(0.001, 0.006),
            a: rand(0.001, 0.01),
            opacity: rand(0.3, 0.7),
        }
    }
    const delay = () => Math.floor(rand(400, 1000));

    _.meteorAnimation = new MeteorAnimation(
        meteorFactory,
        meteorsCount,
        delay,
    );
}

function clear() {
    _.ctx.clearRect(0, 0, _.width, _.height);
}

function draw() {
    clear();
    if (!isNotAllowed()) {
        _.starsAnimation.draw(_.ctx);
        _.meteorAnimation.draw(_.ctx);
        _.sunAnimation.draw(_.ctx);
        _.starsAnimation.next();
        _.meteorAnimation.next();
        _.sunAnimation.next();
    }
    if (_.play) {
        requestAnimationFrame(draw);
    }
}

function isNotAllowed(): boolean {
    return _.contentWidth >= _.width || Math.abs(_.width - _.contentWidth) < 200;
}
</script>

<style lang="scss">
.canvas {
    display: block;
    width: 100%;
    height: 100%;
}
</style>