"use client"

import { Provider } from "react-redux";
import { SettingsChild } from "./SettingsChild";
import { store } from "@/store/store";

export function Settings(){
    return(
        <Provider store={store}>
            <SettingsChild />
        </Provider>
    )
}