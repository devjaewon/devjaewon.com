export interface Sun {
    x: number;
    y: number;
    radius: number;
    arround: {
        radius: number;
        rotateVelocity: number;
    }
}

interface State {
    arroundRotate: number;
    arroundScale: number;
    arroundScaleDirection: number; // 0 : inner, 1 : outer
}

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

export class SunAnimation {
    static DOUBLE_RADIAN = Math.PI * 2;

    private state: State;
    private arroundImage?: HTMLImageElement;

    constructor(
        private sun: Sun,
    ) {
        this.state = {
            arroundRotate: 0,
            arroundScale: 1,
            arroundScaleDirection: 0,
        }
    }

    async init(): Promise<void> {
        const arroundSVG = new Blob([sunAroundInlineSVG], {type: "image/svg+xml;charset=utf-8"});
        const imageURL = URL.createObjectURL(arroundSVG);
        const image = new Image();
    
        return new Promise<void>(resolve => {
            image.onload = () => {
                this.arroundImage = image;
                resolve();
            };
            image.src = imageURL;
        })
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (!this.arroundImage) {
            return;
        }
        ctx.arc(this.sun.x, this.sun.y, this.sun.radius, 0, SunAnimation.DOUBLE_RADIAN);
        ctx.fillStyle = "#FFBC05";
        ctx.fill();

        const arroundX = this.sun.x - this.sun.arround.radius;
        const arroundY = this.sun.y - this.sun.arround.radius;
        const arroundSize = this.sun.arround.radius * 2;

        ctx.save();
        ctx.translate(this.sun.x, this.sun.y);
        ctx.scale(this.state.arroundScale, this.state.arroundScale);
        ctx.rotate(this.state.arroundRotate * Math.PI / 180);
        ctx.translate(-1 * this.sun.x, -1 * this.sun.y);
        ctx.drawImage(this.arroundImage, arroundX, arroundY, arroundSize, arroundSize);
        ctx.restore();
    }

    next() {
        this.state.arroundRotate += this.sun.arround.rotateVelocity;
        if (this.state.arroundScale >= 1 && this.state.arroundScaleDirection === 1) {
            this.state.arroundScaleDirection = 0;
        } else if (this.state.arroundScale <= 0.9 && this.state.arroundScaleDirection === 0) {
            this.state.arroundScaleDirection = 1;
        }
        if (this.state.arroundScaleDirection === 0) {
            this.state.arroundScale -= 0.0005;
        } else {
            this.state.arroundScale += 0.0005;
        }
    }
}