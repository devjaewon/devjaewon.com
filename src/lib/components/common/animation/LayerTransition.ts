import {
    removeElementChildren,
    removeElementStyles,
    setElementStyles,
    transitionElement,
    transitionElements, type TransitionSpec,
} from "@utils";

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
    async forward() {
        if (!requestAnimationFrame) return;

        this.copyStanbyForMoving();
        await this.fadeOutContent();
        await this.moveStanbiesForward();
        await this.fadeInLayer();
        this.hideStanbies();
    }

    async backward() {
        if (!requestAnimationFrame) return;

        this.showStanbies();
        await this.fadeOutLayer();
        await this.moveStanbiesBackward();
        await this.fadeInContent();
        this.clear();

        return new Promise<void>(resolve => {
            requestAnimationFrame(() => resolve());
        })
    }

    private copyStanbyForMoving() {
        if (!this.content) return;

        Object.keys(this.targets).forEach(elementID => {
            const target = this.targets[elementID];
            const rect = target.el.getBoundingClientRect();
            
            target.y = rect.top ?? rect.y;
            target.x = rect.left ?? rect.x;

            this.stanbies[elementID] = target.el.cloneNode(true) as HTMLElement;
            setElementStyles(this.stanbies[elementID], {
                "position": "fixed",
                "z-index": "10000",
                "top": `${target.y}px`,
                "left": `${target.x}px`,
                "width": `${rect.width}px`,
                "height": `${rect.height}px`,
            });
            setElementStyles(target.el, {
                "opacity": "0",
            });
            this.stanbyContainer?.appendChild(this.stanbies[elementID]);
        })
    }

    private fixScreen() {
        setElementStyles(document.body, {
            "overflow": "hidden",
            "height": "100%",
            "min-height": `${window.innerHeight - 3}px`,
        });
    }

    private unfixScreen() {
        removeElementStyles(document.body, [
            "overflow",
            "height",
            "min-height",
        ]);
    }

    private async fadeOutContent() {
        const content = this.content;
        if (!content) return;

        return transitionElement({
            target: content,
            transition: {
                target: "opacity",
                duration: this.option.fadeDuration,
                timingFunction: this.option.fadeTimingFunction,
            },
            styles: {
                "opacity": "0",
            },
            readyStyles: {
                "opacity": "1",
            },
        });
    }

    private fadeInContent() {
        const content = this.content;

        if (!content) return;
        return transitionElement({
            target: content,
            transition: {
                target: "opacity",
                duration: this.option.fadeDuration,
                timingFunction: this.option.fadeTimingFunction,
            },
            styles: {
                "opacity": "1",
            },
            readyStyles: {
                "opacity": "0",
            },
        });
    }
 
    private async moveStanbiesForward() {
        const transitionSpecs: Array<TransitionSpec> = [];

        Object.keys(this.stanbies).forEach(elementID => {
            const target = this.targets[elementID];
            const next = this.nexts[elementID];
            const stanby = this.stanbies[elementID];

            const rect = next.el.getBoundingClientRect();
            next.x = rect.left ?? rect.x;
            next.y = rect.top ?? rect.y;
            const d = [next.x - target.x, next.y - target.y];

            transitionSpecs.push({
                target: stanby,
                transition: {
                    target: "transform",
                    duration: this.option.moveDuration,
                    timingFunction: this.option.moveTimingFunction,
                },
                styles: {
                    "transform": `translate(${d[0]}px, ${d[1]}px)`,
                }
            });
            if (elementID === "title") {
                const elText = (stanby.firstElementChild as HTMLElement);

                transitionSpecs.push({
                    target: elText,
                    transition: {
                        target: "transform",
                        duration: this.option.moveDuration,
                        timingFunction: this.option.moveTimingFunction,
                    },
                    styles: {
                        "transform": "scale(1.1)",
                    },
                    readyStyles: {
                        "transform-origin": "left",
                    },
                });
            }
        });

        return transitionElements(transitionSpecs);
    }

    private async moveStanbiesBackward() {
        const transitionSpecs: Array<TransitionSpec> = [];

        Object.keys(this.stanbies).forEach(elementID => {
            const next = this.nexts[elementID];
            const stanby = this.stanbies[elementID];
            const rect = next.el.getBoundingClientRect();
            next.x = rect.left ?? rect.x;
            next.y = rect.top ?? rect.y;

            transitionSpecs.push({
                target: stanby,
                transition: {
                    target: "transform",
                    duration: this.option.moveDuration,
                    timingFunction: this.option.moveTimingFunction,
                },
                styles: {
                    "transform": "translate(0, 0)",
                }
            });
            if (elementID === "title") {
                const elText = (stanby.firstElementChild as HTMLElement);

                transitionSpecs.push({
                    target: elText,
                    transition: {
                        target: "transform",
                        duration: this.option.moveDuration,
                        timingFunction: this.option.moveTimingFunction,
                    },
                    styles: {
                        "transform": "scale(1)",
                    },
                    readyStyles: {
                        "transform-origin": "left",
                    },
                });
            }
        });

        return transitionElements(transitionSpecs);
    }

    private async fadeInLayer() {
        const layer = this.layer;
        if (!layer) return;

        return transitionElement({
            target: layer,
            transition: {
                target: "opacity",
                duration: this.option.fadeDuration,
                timingFunction: this.option.fadeTimingFunction,
            },
            styles: {
                "opacity": "1",
            }
        });
    }

    private async fadeOutLayer() {
        const layer = this.layer;
        if (!layer) return;

        return transitionElement({
            target: layer,
            transition: {
                target: "opacity",
                duration: this.option.fadeDuration,
                timingFunction: this.option.fadeTimingFunction,
            },
            styles: {
                "opacity": "0",
            }
        });
    }

    private hideStanbies() {
        if (!this.stanbyContainer) return;
        this.stanbyContainer.style.display = "none";
    }

    private showStanbies() {
        if (!this.stanbyContainer) return;
        this.stanbyContainer.style.removeProperty("display");
    }

    private clear() {
        this.clearStanbies();
    }

    private clearStanbies() {
        if (!this.stanbyContainer) return;
        removeElementChildren(this.stanbyContainer);
        removeElementStyles(this.stanbyContainer, ["display"]);
        Object.keys(this.targets).forEach(elementID => {
            removeElementStyles(this.targets[elementID].el, ["opacity"]);
        });
    }
}
