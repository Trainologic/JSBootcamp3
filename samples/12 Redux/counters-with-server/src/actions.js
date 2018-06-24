import {delay} from "./helpers";

export function inc(counter) {
    return {type: "INC", counter};
}

export function dec(counter) {
    return {type: "DEC", counter};
}

export function loadAllCounters(){
    return async dispatch => {
        const httpResponse = await fetch("/counters.json");
        const counters = await httpResponse.json();

        // await delay(2500);
        //
        // const counters = [
        //     {id:1, name: "Banana", value: 0},
        //     {id:2, name: "Sport", value: 1},
        // ];

        dispatch(setCounters(counters));
    };
}

function setCounters(counters) {
    return {
        type: "SET_COUNTERS",
        counters,
    }
}
