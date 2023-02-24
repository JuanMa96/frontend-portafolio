import { createStore } from "redux";

function reducer(state, action){
    switch(action.type){
        case "toggle theme":
            if(state != "dark") return "dark"
            return "light"
        case "change to dark":
            return "dark"
        case "change to light":
            return "light"
        default:
            return state
    }
}

export const store = createStore(reducer, "dark")