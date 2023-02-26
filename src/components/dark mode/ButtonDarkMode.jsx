"use client";

import { store } from "../../store/store";
import { DarkMode } from "@/components/dark mode/DarkMode";
import { Provider } from "react-redux";

export function ButtonDarkMode({theme}){
    if(theme == "dark" && store.getState().theme != "dark"){
        store.dispatch({type : "change to dark"});
    }else if(theme == "light" && store.getState().theme != "light"){
        store.dispatch({type : "change to light"});
    }

    return(
        <Provider store={store}>
            <DarkMode />
        </Provider>
    )
}