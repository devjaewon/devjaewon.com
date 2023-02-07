<canvas class="canvas" bind:this={elCanvas}></canvas>

<script lang="ts">
import { browser } from "$app/environment";
import { colorProperty, debounce, rand } from "@/utils";
import { onMount, onDestroy } from "svelte";

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

export let snowflakeCount = 100;

let elCanvas: HTMLCanvasElement;

const _ = {
    ctx: null as unknown as CanvasRenderingContext2D,
    contentWidth: 0,
    width: 0,
    height: 0,
    snowflakes: [] as Array<Snowflake>,
    play: false,
};

const handleResize = debounce(() => {
    clear();
    initSize();
    initSnowflakes();
});

onMount(() => {
    if (isNotSupport()) return;
    _.ctx = elCanvas.getContext("2d")!;
    initSize();
    initSnowflakes();
    window.addEventListener("resize", handleResize);
    _.play = true;
    requestAnimationFrame(draw)
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
    _.width = elCanvas.clientWidth;
    _.height = elCanvas.clientHeight;
    elCanvas.width = _.width;
    elCanvas.height = _.height;

    const elContent = document.getElementById("content");
    if (elContent) {
        _.contentWidth = elContent.clientWidth;
    }
}

function initSnowflakes() {
    _.snowflakes = [];
    for (let i = 0; i < snowflakeCount; i++) {
        _.snowflakes[i] = createSnowflake();
    }
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

function createSnowflake(): Snowflake {
    const ix = getInitialX();

    return {
        radius: rand(1.5, 3.2),
        x: ix,
        ix,
        sx: 0,
        rx: rand(0.005, 0.02),
        wx: rand(0, 15),
        y: rand(0, 1) * _.height,
        dy: rand(0.3, 0.6),
        opacity: rand(0, 1),
    }
}

function drawSnowflake(snowflake: Snowflake) {
    const gradient = _.ctx.createRadialGradient(
        snowflake.x,
        snowflake.y,
        0,
        snowflake.x,
        snowflake.y,
        snowflake.radius,
    );

    gradient.addColorStop(0.0, colorProperty(255, 233, 32, snowflake.opacity));
    gradient.addColorStop(0.8, colorProperty(242, 205, 92, snowflake.opacity));
    gradient.addColorStop(1.0, colorProperty(242, 205, 92, snowflake.opacity));

    _.ctx.beginPath();
    _.ctx.arc(
        snowflake.x,
        snowflake.y,
        snowflake.radius,
        0,
        Math.PI * 2,
        false,
    );
    _.ctx.fillStyle = gradient;
    _.ctx.fill();
}

function drawSnowflakes() {
    if (_.contentWidth >= _.width || Math.abs(_.width - _.contentWidth) < 200) {
        clear();
        return;
    }

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = _.snowflakes[i];
        snowflake && drawSnowflake(snowflake);
    }
}

function moveSnowflakes() {
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = _.snowflakes[i];
        if (!snowflake) break;

        _.snowflakes[i].sx += snowflake.rx;
        _.snowflakes[i].x = snowflake.ix + snowflake.wx * Math.sin(_.snowflakes[i].sx);
        _.snowflakes[i].y += _.snowflakes[i].dy;

        if (_.snowflakes[i].y > _.height) {
            _.snowflakes[i].x = getInitialX();
            _.snowflakes[i].y = -50;
        }
    }
}

function clear() {
    _.ctx.clearRect(0, 0, _.width, _.height);
}

function draw() {
    clear();
    drawSnowflakes();
    moveSnowflakes();
    if (_.play) {
        requestAnimationFrame(draw);
    }
}
</script>

<style lang="scss">
.canvas {
    display: block;
    width: 100%;
    height: 100%;
}
</style>