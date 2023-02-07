<canvas class="canvas" bind:this={elCanvas}></canvas>

<script lang="ts">
import { browser } from "$app/environment";
import { debounce, rand } from "@/utils";
import { onMount, onDestroy } from "svelte";
import { MeteorAnimation, type Meteor } from "./MeteorAnimation";
import { StarsAnimation, type Star } from "./StarsAnimation";
import { SunAnimation, type Sun } from "./SunAnimation";

export let starsCount = 150;
export let meteorsCount = 3;

let elCanvas: HTMLCanvasElement;

const _ = {
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
    clear();
    initSize();
    initStarsAnimation();
    initMeteorAnimation();
    initSunAnimation();
});

onMount(() => {
    if (isNotSupport()) return;
    _.ctx = elCanvas.getContext("2d")!;
    initSize();
    initStarsAnimation();
    initMeteorAnimation();
    initSunAnimation().then(() => {
        window.addEventListener("resize", handleResize);
        _.play = true;
        requestAnimationFrame(draw)
    });
});

onDestroy(() => {
    if (isNotSupport()) return;
    window.removeEventListener("resize", handleResize);
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
        const side = Math.round(rand(0, 1));
        const isLeftSide = side === 0;

        const mid = _.width / 2;
        const chalf = _.contentWidth / 2;
        const padding = 30;
        const ix = isLeftSide ? rand(0, mid - chalf - padding) : rand(mid + chalf + padding, _.width);

        return {
            radius: rand(1.5, 3.2),
            ix,
            rx: rand(0.005, 0.02),
            wx: rand(0, 15),
            iy: rand(0, 1) * _.height,
            dy: rand(0.3, 0.6),
            opacity: rand(0, 1),
        }
    }

    _.starsAnimation = new StarsAnimation(
        starFactory,
        starsCount,
        _.height,
    );
}

async function initSunAnimation() {
    const sunFactory = (): Sun => {
        const x = (_.width - _.contentWidth) * 0.5 * 0.4;
        const sun: Sun = {
            x,
            y: 120,
            radius: 33,
            arround: {
                radius: 63,
                rotateVelocity: 0.2,
            },
        };

        return sun;
    }

    _.sunAnimation = new SunAnimation(sunFactory);

    return _.sunAnimation.init();
}

function initMeteorAnimation() {
    const meteorFactory = (): Meteor => {
        const radius = rand(1.5, 3.2);
        return {
            radius,
            tail: {
                radius: radius + rand(3.5, 5),
                length: rand(10, 30),
            },
            degree: rand(230, 260),
            ix: rand((_.width - _.contentWidth) * 0.5 * 0.4, _.width * 1.4),
            d: rand(0.002, 0.01),
            a: rand(0.002, 0.04),
        }
    }

    _.meteorAnimation = new MeteorAnimation(meteorFactory, meteorsCount);
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