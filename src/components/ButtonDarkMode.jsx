"use client";

import { store } from "../store/store";
import { DarkMode } from "@/components/darkMode";
import { Provider } from "react-redux";

export function ButtonDarkMode({theme}){
    if(theme == "dark" && store.getState() != "dark"){
        store.dispatch({type : "change to dark"});
    }else if(theme == "light" && store.getState() != "light"){
        store.dispatch({type : "change to light"});
    }

    return(
        <Provider store={store}>
            <DarkMode />
        </Provider>
    )
}