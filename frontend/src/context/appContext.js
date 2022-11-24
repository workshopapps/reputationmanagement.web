import React, {createContext, useState } from "react";
import { TableDatas } from "../components/Dashboard/data/TableData";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [ someState, setSomeState ] = useState(0);
    const [ requestSuccessfulModalActive, setRequestSuccessfulModalActive ] = useState(false)
    const [ allRequests, setAllRequests ] = useState(TableDatas);
    return(
        <AppContext.Provider 
            value={{
                someState, 
                setSomeState, 
                requestSuccessfulModalActive, 
                setRequestSuccessfulModalActive,
                allRequests,
                setAllRequests,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;