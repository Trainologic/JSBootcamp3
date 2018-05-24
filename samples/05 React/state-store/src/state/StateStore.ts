interface IStateStore {
    state: {};

    set(key: string, val: any): void
    get(key: string): any | null
}

class StateStore implements IStateStore {
    state: {} = {};

    set(key: string, val: any) {
        this.state[key] = val;
    }

    get(key: string) {
        return this.state[key] || null;
    }

    static instance: IStateStore;

    static getInstance() {
        if (!StateStore.instance) {
            StateStore.instance = new StateStore();
        }

        return StateStore.instance;
    }
}

export default StateStore;