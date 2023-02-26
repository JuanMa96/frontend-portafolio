import { createStore } from "redux";

function reducer(state, action){
    switch(action.type){
        case "toggle theme":
            if(state.theme != "dark") return Object.assign({}, state, {theme: "dark"})
            return Object.assign({}, state, {theme: "light"})
        case "change to dark":
            return Object.assign({}, state, {theme: "dark"})
        case "change to light":
            return Object.assign({}, state, {theme: "light"})
        case "close settings cookies":
            return Object.assign({}, state, {openSettingCookies: false})
        case "open setting cookies":
            return Object.assign({}, state, {openSettingCookies: true})
        default:
            return state
    }
}


export const store = createStore(reducer, {theme: "light", openSettingCookies: false})

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)
