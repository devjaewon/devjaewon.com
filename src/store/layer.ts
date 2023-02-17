import type { LayerTransition } from "../components/common/animation/LayerTransition";
import { LayerType, type WorkProject } from "../types";
import { writable } from "svelte/store";

export class LayerState {
    constructor(
        private _type: LayerType,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        private _data: any,
        private _transition: LayerTransition,
    ) {}

    get type() {
        return this._type;
    }

    get data() {
        return this._data;
    }

    get transition() {
        return this._transition;
    }

    static workProjectDetail(data: WorkProject, transition: LayerTransition) {
        return new LayerState(
            LayerType.WorkProjectDetail,
            data,
            transition,
        );
    }
}

function createStore() {
    const { subscribe, set } = writable<LayerState | null>(null);

    return {
        subscribe,
        open: (state: LayerState) => {
            set(state);
        },
        close: () => {
            set(null);
        }
    };
}

export const layer = createStore();