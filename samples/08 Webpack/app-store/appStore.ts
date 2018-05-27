import {listeners} from "cluster";

export interface AppState {
    counter: number;
}

export class AppService {
    listeners: Function[];

    constructor(){
        this.listeners = [];
    }

    inc(){
        appStore.counter++;

        this.onStoreChanged();
    }

    dec(){
        appStore.counter--;

        this.onStoreChanged();
    }

    subscribe(listener){
        this.listeners.push(listener);
    }

    private onStoreChanged(){
        for(const listener of this.listeners){
            listener();
        }
    }
}

export const appStore: AppState = {
    counter: 0,
};

export const appService: AppService = new AppService();
