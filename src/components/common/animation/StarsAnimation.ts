import { colorProperty, rand } from "@/utils";

export interface Star {
    radius: number;
    ix: number; // initial x
    rx: number;
    wx: number;
    iy: number; // initial y
    dy: number;
    opacity: number;
}

interface State {
    x: number;
    sx: number;
    y: number;
}

export class StarsAnimation {
    static DOUBLE_RADIAN = Math.PI * 2;

    private states: Array<State>;
    private len: number;

    constructor(
        private stars: Array<Star>,
        private end: number,
        private nextX: () => number,
    ) {
        this.states = stars.map(star => ({
            x: star.ix,
            y: star.iy,
            sx: rand(-1, 1),
        }));
        this.len = stars.length;
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < this.len; i++) {
            const gradient = ctx.createRadialGradient(
                this.states[i].x,
                this.states[i].y,
                0,
                this.states[i].x,
                this.states[i].y,
                this.stars[i].radius,
            );
        
            gradient.addColorStop(0.0, colorProperty(255, 233, 32, this.stars[i].opacity));
            gradient.addColorStop(0.8, colorProperty(242, 205, 92, this.stars[i].opacity));
            gradient.addColorStop(1.0, colorProperty(242, 205, 92, this.stars[i].opacity));
        
            ctx.beginPath();
            ctx.arc(
                this.states[i].x,
                this.states[i].y,
                this.stars[i].radius,
                0,
                Math.PI * 2,
                false,
            );
            ctx.fillStyle = gradient;
            ctx.fill();
        }
    }

    next() {
        for (let i = 0; i < this.len; i++) {
            this.states[i].sx += this.stars[i].rx;
            if (this.states[i].sx >= StarsAnimation.DOUBLE_RADIAN) {
                this.states[i].sx = 0;
            }

            this.states[i].x = this.stars[i].ix + (this.stars[i].wx * Math.sin(this.states[i].sx));
            this.states[i].y += this.stars[i].dy;
            if (this.states[i].y > this.end) {
                this.stars[i].ix = this.nextX();
                this.states[i].x = this.stars[i].ix;
                this.states[i].y = -50;
            }
        }
    }
}