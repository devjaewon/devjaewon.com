interface ElementMap {
    [elementID: string]: HTMLElement;
}

interface ElementState {
    [elementID: string]: {
        el: HTMLElement,
        x: number;
        y: number;
    }
}

interface LayerTransitionOption {
    fadeDuration: number;
    fadeTimingFunction?: string;
    moveDuration: number;
    moveTimingFunction?: string;
}

export class LayerTransition {
    static ErrorElementNotFound = new Error("element not found in layer transition");

    private targets: ElementState = {};
    private nexts: ElementState = {};
    private stanbies: ElementMap = {};
    private stanbyContainer?: HTMLElement;
    private content?: HTMLElement;
    private layer?: HTMLElement;

    constructor(private option: LayerTransitionOption) {}

    setContent(content: HTMLElement) {
        this.content = content;
    }

    setLayer(layer: HTMLElement) {
        this.layer = layer;
    }

    setTargets(targets: ElementMap) {
        this.targets = Object.keys(targets).reduce((state, id) => {
            state[id] = {
                el: targets[id],
                x: 0,
                y: 0,
            }
            return state;
        }, {} as ElementState);
    }

    setNexts(nexts: ElementMap) {
        this.nexts = Object.keys(nexts).reduce((state, id) => {
            state[id] = {
                el: nexts[id],
                x: 0,
                y: 0,
            }
            return state;
        }, {} as ElementState);
    }

    setStanbyContainer(container: HTMLElement) {
        this.stanbyContainer = container;
    }

    // prev 는 opacity: 1 && visible
    // next 는 opacity: 0 && visible 상태 권장
    async start() {
        if (!requestAnimationFrame) return;

        this.copyStanbyForMoving();
        this.fixScreen();
        await this.fadeOutContent();
        await this.moveStanbies();
        await this.fadeInLayer();
        this.hideStanbies();
    }

    private copyStanbyForMoving() {
        if (!this.content) return;

        Object.keys(this.targets).forEach(elementID => {
            const target = this.targets[elementID];
            const rect = target.el.getBoundingClientRect();
            
            target.y = rect.top ?? rect.y;
            target.x = rect.left ?? rect.x;

            this.stanbies[elementID] = target.el.cloneNode(true) as HTMLElement;
            this.stanbies[elementID].style.position = "fixed";
            this.stanbies[elementID].style.zIndex = "10000";
            this.stanbies[elementID].style.top = `${target.y}px`;
            this.stanbies[elementID].style.left = `${target.x}px`;
            this.stanbies[elementID].style.width = `${rect.width}px`;
            this.stanbies[elementID].style.height = `${rect.height}px`;
            this.stanbyContainer?.appendChild(this.stanbies[elementID]);
            target.el.style.opacity = '0';
        })
    }

    private fixScreen() {
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
        document.body.style.minHeight = `${window.innerHeight - 3}px`;
    }

    private unfixScreen() {
        document.body.style.removeProperty("overflow");
        document.body.style.removeProperty("height");
        document.body.style.removeProperty("min-height");
    }

    private async fadeOutContent() {
        const content = this.content;

        if (!content) return;
        let isEnd = false; // TODO: 추후 race condition util 필요
        let timer: NodeJS.Timeout;
        const end = () => {
            if (isEnd) return false;
            isEnd = true;
            clearTimeout(timer);
            return true;
        } 

        const duration = `${(this.option.fadeDuration / 1000).toFixed(1)}s`;
        const timingFunction = this.option.fadeTimingFunction ?? "ease";

        content.style.opacity = "1";
        content.style.transition = `opacity ${duration} ${timingFunction} 0s`;
        return new Promise<void>(resolve => {
            timer = setTimeout(() => {
                if (end()) {
                    resolve();
                }
            }, this.option.fadeDuration + 30);
            content.ontransitionend = () => {
                content.ontransitionend = null;
                if (end()) {
                    resolve();
                }
            }

            requestAnimationFrame(() => {
                content.style.opacity = "0";
            });
        });
    }

    private async moveStanbies() {
        let isEnd = false;
        let timer: NodeJS.Timeout;
        const end = () => {
            if (isEnd) return false;
            isEnd = true;
            clearTimeout(timer);
            return true;
        } 

        const elementIDs = Object.keys(this.stanbies);
        const d: Array<Array<number>> = [];
        let elLastStanby: HTMLElement;
        
        elementIDs.forEach((elementID, i) => {
            const target = this.targets[elementID];
            const next = this.nexts[elementID];
            const stanby = this.stanbies[elementID];

            if (i === elementIDs.length - 1) {
                elLastStanby = stanby;
            }
            
            const rect = next.el.getBoundingClientRect();
            const duration = `${(this.option.moveDuration / 1000).toFixed(1)}s`;
            const timingFunction = this.option.moveTimingFunction ?? "ease";

            next.x = rect.left ?? rect.x;
            next.y = rect.top ?? rect.y;
            d[i] = [next.x - target.x, next.y - target.y];

            console.log(target, next);
            if (elementID === "title") {
                const elText = (stanby.firstElementChild as HTMLElement);
                elText.style.transformOrigin = "left";
                elText.style.transition = `transform ${duration} ${timingFunction} 0s`;
            }
            stanby.style.transition = `transform ${duration} ${timingFunction} 0s`;
        });

        return new Promise<void>(resolve => {
            timer = setTimeout(() => {
                if (end()) {
                    resolve();
                }
            }, this.option.moveDuration + 30);
            elLastStanby.ontransitionend = () => {
                elLastStanby.ontransitionend = null;
                if (end()) {
                    resolve();
                }
            }

            requestAnimationFrame(() => {
                elementIDs.forEach((elementID, i) => {
                    const stanby = this.stanbies[elementID];
                    const [x, y] = d[i];

                    stanby.style.transform = `translate(${x}px, ${y}px)`;
                    if (elementID === "title") {
                        const elText = (stanby.firstElementChild as HTMLElement);
                        elText.style.transform = 'scale(1.1)';
                    }
                });
            });
        })
    }

    private async fadeInLayer() {
        const layer = this.layer;

        if (!layer) return;

        let isEnd = false;
        let timer: NodeJS.Timeout;
        const end = () => {
            if (isEnd) return false;
            isEnd = true;
            clearTimeout(timer);
            return true;
        } 

        const duration = `${(this.option.fadeDuration / 1000).toFixed(1)}s`;
        const timingFunction = this.option.fadeTimingFunction ?? "ease";

        layer.style.transition = `opacity ${duration} ${timingFunction} 0s`;
        return new Promise<void>(resolve => {
            timer = setTimeout(() => {
                if (end()) {
                    resolve();
                }
            }, this.option.moveDuration + 30);
            layer.ontransitionend = () => {
                layer.ontransitionend = null;
                if (end()) {
                    resolve();
                }
            }

            requestAnimationFrame(() => {
                layer.style.opacity = "1";
            })
        });
    }

    private hideStanbies() {
        if (!this.stanbyContainer) return;
        this.stanbyContainer.style.display = "none";
    }
}
