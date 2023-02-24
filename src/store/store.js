import { createStore } from "redux";

function reducer(store, action){
    switch(action.type){
        case "toggleTheme":
            if(store.theme != "dark") return "dark"
            return "light"
    }
}

export const store = createStore(reducer)