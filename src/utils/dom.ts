export function removeElementChildren(element: HTMLElement) {
    element.innerHTML = '';
}

export function setElementStyles(
    target: HTMLElement,
    styles: Record<string, string>,
) {
    Object.keys(styles).forEach(styleName => {
        target.style.setProperty(styleName, styles[styleName]);
    });
}

export function removeElementStyles(
    target: HTMLElement,
    styleNames: Array<string>,
) {
    styleNames.forEach(styleName => {
        target.style.removeProperty(styleName);
    });
}

export interface TransitionSpec {
    target: HTMLElement;
    transition: {
        target: string;
        duration: number;
        timingFunction?: string;
        delay?: number;
    },
    styles: Record<string, string>,
    readyStyles?: Record<string, string>,
}

export async function transitionElement(
    spec: TransitionSpec,
    sync = false,
) : Promise<void> {
    const { target, transition, styles, readyStyles = {} } = spec;
    let isEnd = false; // TODO: 추후 race condition util 필요, Promise.race 는 abort 된 작업을 끝까지 수행함.
    let timer: NodeJS.Timeout;
    const end = () => {
        if (isEnd) return false;
        isEnd = true;
        clearTimeout(timer);
        return true;
    }

    const duration = `${(transition.duration / 1000).toFixed(1)}s`;
    const timingFunction = transition.timingFunction ?? "ease";
    const delay = `${((transition.delay ?? 0) / 1000).toFixed(1)}s`
    const transitionValue = `${transition.target} ${duration} ${timingFunction} ${delay}`;

    target.style.transition = transitionValue;
    setElementStyles(target, readyStyles);
    
    return new Promise<void>(resolve => {
        if (!sync) {
            timer = setTimeout(() => {
                if (end()) {
                    resolve();
                }
            }, transition.duration + 30);
    
            // 애니메이션 복잡도를 낮추기 위해 하나의 요소에는 하나의 transition 만 적용하는 것을 강제한다.
            target.ontransitionend = () => {
                target.ontransitionend = null;
                if (end()) {
                    resolve();
                }
            }
        }

        requestAnimationFrame(() => {
            setElementStyles(target, styles);
        });

        if (sync) {
            resolve();
        }
    });
}

export async function transitionElements(
    specs: Array<TransitionSpec>,
    sync = false,
) : Promise<void> {
    await Promise.all(specs.map((spec, i) =>
        i === specs.length - 1
            ? transitionElement(spec, sync)
            : transitionElement(spec, true),
    ));
}