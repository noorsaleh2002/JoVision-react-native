import React, { createContext, useState } from "react";

export const sharedTextContext=createContext();

export const SharedTextProvider=({children})=>{

    const [text,setText]=useState("");
    return(

        <sharedTextContext.Provider value={{text,setText}}>
            {children}
        </sharedTextContext.Provider>


    );
};