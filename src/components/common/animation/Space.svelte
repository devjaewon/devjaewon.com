<canvas class="canvas" bind:this={elCanvas}></canvas>

<script lang="ts">
import { browser } from "$app/environment";
import { colorProperty, debounce, rand } from "@/utils";
import { onMount, onDestroy } from "svelte";
	import { StarsAnimation, type Star } from "./StarsAnimation";

interface Snowflake {
    radius: number;
    x: number;
    ix: number; // initial x
    sx: number; // septa
    rx: number;
    wx: number;
    y: number;
    dy: number;
    opacity: number;
}

interface Sun {
    x: number;
    y: number;
    radius: number;
    arround: {
        radius: number;
        rotate: number;
        rotateV: number;
        scale: number;
        scaleLimit: number;
        scaleDirection: number; // 0 : inner, 1 : outer
        image: HTMLImageElement;
    }
}

export let starsCount = 100;

let elCanvas: HTMLCanvasElement;

const sunAroundInlineSVG = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 457.32 457.32" xml:space="preserve">
	<path d="M 401.429,228.66 l 42.467 -57.07 c 2.903 -3.9,3.734-8.966,2.232-13.59c-1.503-4.624-5.153-8.233-9.794-9.683
		l-67.901-21.209l0.811-71.132c0.056-4.862-2.249-9.449-6.182-12.307c-3.934-2.858-9.009-3.633-13.615-2.077l-67.399,22.753
		L240.895,6.322C238.082,2.356,233.522,0,228.66,0c-4.862,0-9.422,2.356-12.235,6.322l-41.154,58.024l-67.4-22.753
		c-4.607-1.555-9.682-0.781-13.615,2.077c-3.933,2.858-6.238,7.445-6.182,12.307l0.812,71.132l-67.901,21.209
		c-4.641,1.45-8.291,5.059-9.793,9.683c-1.503,4.624-0.671,9.689,2.232,13.59l42.467,57.07l-42.467,57.07
		c-2.903,3.9-3.734,8.966-2.232,13.59c1.502,4.624,5.153,8.233,9.793,9.683l67.901,21.208l-0.812,71.132
		c-0.056,4.862,2.249,9.449,6.182,12.307c3.934,2.857,9.007,3.632,13.615,2.077l67.4-22.753l41.154,58.024
		c2.813,3.966,7.373,6.322,12.235,6.322c4.862,0,9.422-2.356,12.235-6.322l41.154-58.024l67.399,22.753
		c4.606,1.555,9.681,0.781,13.615-2.077c3.933-2.858,6.238-7.445,6.182-12.306l-0.811-71.133l67.901-21.208
		c4.641-1.45,8.291-5.059,9.794-9.683c1.502-4.624,0.671-9.689-2.232-13.59L401.429,228.66z M228.66,374.627
		c-80.487,0-145.968-65.481-145.968-145.968S148.173,82.692,228.66,82.692s145.968,65.48,145.968,145.967
		S309.147,374.627,228.66,374.627z" fill="#FBBC05" transform-origin="center"/>
</svg>`;
const _ = {
    ctx: null as unknown as CanvasRenderingContext2D,
    contentWidth: 0,
    width: 0,
    height: 0,
    starsAnimation: null as unknown as StarsAnimation,
    sun: null as unknown as Sun,
    play: false,
};

const handleResize = debounce(() => {
    clear();
    initSize();
    initStarsAnimation();
    initSun();
});

onMount(() => {
    if (isNotSupport()) return;
    _.ctx = elCanvas.getContext("2d")!;
    initSize();
    initStarsAnimation();
    initSun().then(() => {
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
    const stars = [];
    for (let i = 0; i < starsCount; i++) {
        stars[i] = createStar();
    }

    _.starsAnimation = new StarsAnimation(
        stars,
        _.height,
    );
}

async function initSun() {
    const x = (_.width - _.contentWidth) * 0.5 * 0.4;
    const arroundSVG = new Blob([sunAroundInlineSVG], {type: "image/svg+xml;charset=utf-8"});
    const imageURL = URL.createObjectURL(arroundSVG);
    const image = new Image();

    return new Promise<void>(resolve => {
        image.onload = () => {
            _.sun = {
                x,
                y: 120,
                radius: 33,
                arround: {
                    radius: 63,
                    rotate: 0,
                    rotateV: 0.2,
                    scale: 1,
                    scaleLimit: 0,
                    scaleDirection: 0,
                    image: image,
                },
            };
            resolve();
        };
        image.src = imageURL;
    })
}

function getInitialX(): number {
    const side = Math.round(rand(0, 1));
    const isLeftSide = side === 0;

    const mid = _.width / 2;
    const chalf = _.contentWidth / 2;
    const padding = 30;
    const ix = isLeftSide ? rand(0, mid - chalf - padding) : rand(mid + chalf + padding, _.width);

    return ix;
}

function createStar(): Star {
    const ix = getInitialX();

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

function drawSun() {
    _.ctx.arc(_.sun.x, _.sun.y, _.sun.radius, 0, 2 * Math.PI);
    _.ctx.fillStyle = "#FFBC05";
    _.ctx.fill();

    const arroundX = _.sun.x - _.sun.arround.radius;
    const arroundY = _.sun.y - _.sun.arround.radius;
    const arroundSize = _.sun.arround.radius * 2;

    _.sun.arround.rotate += _.sun.arround.rotateV;
    if (_.sun.arround.scale >= 1 && _.sun.arround.scaleDirection === 1) {
        _.sun.arround.scaleDirection = 0;
    } else if (_.sun.arround.scale <= 0.9 && _.sun.arround.scaleDirection === 0) {
        _.sun.arround.scaleDirection = 1;
    }
    if (_.sun.arround.scaleDirection === 0) {
        _.sun.arround.scale -= 0.0005;
    } else {
        _.sun.arround.scale += 0.0005;
    }
    _.ctx.save();
    _.ctx.translate(_.sun.x, _.sun.y);
    _.ctx.scale(_.sun.arround.scale, _.sun.arround.scale);
    _.ctx.rotate(_.sun.arround.rotate * Math.PI / 180);
    _.ctx.translate(-1 * _.sun.x, -1 * _.sun.y);
    _.ctx.drawImage(_.sun.arround.image, arroundX, arroundY, arroundSize, arroundSize);
    _.ctx.restore();
    
}

function clear() {
    _.ctx.clearRect(0, 0, _.width, _.height);
}

function draw() {
    clear();
    if (!isNotAllowed()) {
        _.starsAnimation.draw(_.ctx);
        drawSun();
        _.starsAnimation.next();
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