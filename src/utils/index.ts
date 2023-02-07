// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce(func: (...args: any[]) => any, timeout = 300) {
    let timer: NodeJS.Timeout;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (...args: any[]) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(func, args);
        }, timeout);
    };
}

export function rand(min: number, max: number) {
    if (min === 0 && max === 1) {
        return Math.random();
    }

    return min + (Math.random() * (max - min));
}

export function colorProperty(red: number, green: number, blue: number, alpha: number): string {
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}
