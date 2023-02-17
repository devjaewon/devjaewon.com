import { colorProperty, rand } from "../../../utils";

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

    private stars: Array<Star>;
    private states: Array<State>;

    constructor(
        private starFactory: () => Star,
        private count: number,
        private endChecker: (x: number, y: number) => boolean,
    ) {
        this.stars = [];
        for (let i = 0; i < count; i++) {
            this.stars[i] = starFactory();
        }
        this.states = this.stars.map(star => ({
            x: star.ix,
            y: star.iy,
            sx: rand(-1, 1),
        }));
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < this.count; i++) {
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
        for (let i = 0; i < this.count; i++) {
            this.states[i].sx += this.stars[i].rx;
            if (this.states[i].sx >= StarsAnimation.DOUBLE_RADIAN) {
                this.states[i].sx = 0;
            }

            this.states[i].x = this.stars[i].ix + (this.stars[i].wx * Math.sin(this.states[i].sx));
            this.states[i].y += this.stars[i].dy;
            if (this.endChecker(this.states[i].x, this.states[i].y)) {
                this.stars[i] = this.starFactory();
                this.states[i].x = this.stars[i].ix;
                this.states[i].y = -50;
            }
        }
    }
}