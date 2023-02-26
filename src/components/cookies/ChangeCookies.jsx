"use client";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ChangeCookiesChild } from "./ChangeCookiesChild";

export function ChangeCookies(){
    return(
        <Provider store={store}>
            <ChangeCookiesChild />
        </Provider>
    )
} 