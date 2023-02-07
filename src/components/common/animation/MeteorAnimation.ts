export interface Meteor {
    radius: number;
    tail: {
        radius: number;
        length: number;
    }
    degree: number;
    ix: number;
    d: number;
    a: number;
}

interface State {
    x: number;
    y: number;
    d: number;
    radian: number;
}

export class MeteorAnimation {
    static DOUBLE_RADIAN = Math.PI * 2;

    private meteors: Array<Meteor>
    private states: Array<State>;

    constructor(
        private meteorFactory: () => Meteor,
        private count: number,
    ) {
        this.meteors = [];
        for (let i = 0; i < this.count; i++) {
            this.meteors[i] = this.meteorFactory();
        }
        this.states = this.meteors.map(meteor => this._createInitialState(meteor));
    }

    draw(ctx: CanvasRenderingContext2D) {
        for (let i = 0; i < this.count; i++) {
            ctx.beginPath();
            ctx.arc(this.states[i].x, this.states[i].y, this.meteors[i].radius, 0, MeteorAnimation.DOUBLE_RADIAN);
            ctx.fillStyle = "#FFFFFF";
            ctx.fill();
        }
    }

    next() {
        for (let i =0; i < this.count; i++) {
            const dx = this.states[i].d * Math.cos(this.states[i].radian);
            const dy = this.states[i].d * Math.sin(this.states[i].radian);
            this.states[i].x += dx;
            this.states[i].y += dy;
            this.states[i].d += this.meteors[i].a;

            if (this.states[i].x <= 0) {
                this.meteors[i] = this.meteorFactory();
                this.states[i] = this._createInitialState(this.meteors[i]);
            }
        }
    }

    private _createInitialState(meteor: Meteor): State {
        return {
            x: meteor.ix,
            y: -50,
            d: meteor.d,
            radian: (meteor.degree / 360) * Math.PI,
        };
    }
}
