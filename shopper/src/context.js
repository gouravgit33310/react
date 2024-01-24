import { useContext } from "react";
import React from "react";
const AppContext = React.createContext();

const AppProvider  = ({children}) => {
    return (
        <AppContext.Provider value={"Thapa technical"}>
            {children}
        </AppContext.Provider>
    )
};    
   const useGlobalcontext = () => {
        return useContext(AppContext)
    }

export {AppContext, AppProvider, useGlobalcontext};