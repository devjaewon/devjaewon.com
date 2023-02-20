import { colorProperty } from "@utils";

export interface Meteor {
    radius: number;
    degree: number;
    ix: number;
    iy: number;
    d: number;
    a: number;
    opacity: number;
}

interface State {
    x: number;
    y: number;
    radius: number;
    d: number;
    radian: number;
    opacity: number;
    delayTick: number;
}

interface TailState {
    paths: Array<Array<number>>;
    opacity: number;
}

export class MeteorAnimation {
    static DOUBLE_RADIAN = Math.PI * 2;

    private meteors: Array<Meteor>
    private states: Array<State>;
    private tailStates: Array<TailState>;
    private remainTailStates: Array<TailState>;

    constructor(
        private meteorFactory: (i: number) => Meteor,
        private count: number,
        private delay: () => number = () => 0,
    ) {
        this.meteors = [];
        for (let i = 0; i < this.count; i++) {
            this.meteors[i] = this.meteorFactory(i);
        }
        this.states = this.meteors.map(meteor => this._createInitialState(meteor));
        if (count > 0) {
            this.states[0].delayTick = 0;
        }
        this.tailStates = this.meteors.map(meteor => this._createInitialTailState(meteor))
        this.remainTailStates = [];
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < this.count; i++) {
            this._drawMeteor(ctx, this.states[i]);
            this._drawMeteorTail(ctx, this.tailStates[i], this.states[i]);
        }
        for (let i = 0; i < this.remainTailStates.length; i++) {
            this._drawTail(ctx, this.remainTailStates[i]);
        }
    }

    next() {
        this.remainTailStates = this.remainTailStates
            .map(s => {
                s.paths.shift();
                s.paths.shift();
                return s;
            })
            .filter(s => s.paths.length >= 2);
        for (let i =0; i < this.count; i++) {
            if (this.states[i].delayTick > 0) {
                this.states[i].delayTick--;
                continue;
            }

            const dx = this.states[i].d * Math.cos(this.states[i].radian);
            const dy = this.states[i].d * Math.sin(this.states[i].radian);
            this.tailStates[i].paths.push([this.states[i].x, this.states[i].y]);
            this.states[i].x += dx;
            this.states[i].y += dy;
            this.states[i].d += this.meteors[i].a;

            if (this.states[i].x <= 0) {
                this.meteors[i] = this.meteorFactory(i);
                this.states[i] = this._createInitialState(this.meteors[i]);
                
                const remainTailState = this.tailStates[i];
                this.remainTailStates.push(remainTailState);
                this.tailStates[i] = this._createInitialTailState(this.meteors[i]);
            }
        }
    }

    private _createInitialState(meteor: Meteor): State {
        return {
            x: meteor.ix,
            y: meteor.iy,
            radius: meteor.radius,
            d: meteor.d,
            radian: (meteor.degree / 180) * Math.PI,
            opacity: meteor.opacity,
            delayTick: this.delay(),
        };
    }

    private _createInitialTailState(meteor: Meteor): TailState {
        return {
            paths: [],
            opacity: meteor.opacity,
        };
    }

    private _drawMeteor(
        ctx: CanvasRenderingContext2D,
        state: State,
    ) {
        if (state.delayTick > 0) {
            return;
        }

        const gradient = ctx.createRadialGradient(
            state.x,
            state.y,
            0,
            state.x,
            state.y,
            state.radius,
        );
        gradient.addColorStop(0.0, colorProperty(225, 225, 225, 1 * state.opacity));
        gradient.addColorStop(1.0, colorProperty(241, 208, 10, 1 * state.opacity));

        ctx.beginPath();
        ctx.arc(
            state.x,
            state.y,
            state.radius,
            0,
            MeteorAnimation.DOUBLE_RADIAN,
            false,
        )
        ctx.fillStyle = gradient;
        ctx.fill();
    }

    private _drawMeteorTail(
        ctx: CanvasRenderingContext2D,
        state: TailState,
        meteorState: State,
    ) {
        if (meteorState.delayTick > 0) {
            return;
        }
        return this._drawTail(ctx, state);
    }

    private _drawTail(
        ctx: CanvasRenderingContext2D,
        state: TailState,
    ) {
        const { paths, opacity } = state;
        if (paths.length < 2) {
            return;
        }

        const gradient = ctx.createLinearGradient(
            paths[0][0],
            paths[0][1],
            paths[paths.length - 1][0],
            paths[paths.length - 1][1],
        );
        
        gradient.addColorStop(0.0, colorProperty(255, 255, 255, 0));
        gradient.addColorStop(0.8, colorProperty(255, 255, 255, opacity));
        gradient.addColorStop(1.0, colorProperty(241, 208, 10, opacity));

        ctx.beginPath();
        for (let i = 0; i < paths.length; i++) {
            const path = paths[i];

            if (i === 0) {
                ctx.moveTo(path[0], path[1])
            } else {
                ctx.lineTo(path[0], path[1])
            }
        }
        ctx.strokeStyle = gradient;
        ctx.stroke();
    }
}
