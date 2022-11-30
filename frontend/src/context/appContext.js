import React, {createContext, useState } from "react";
import { TableDatas } from "../components/Dashboard/data/TableData";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [ someState, setSomeState ] = useState(0);
    const [ requestSuccessfulModalActive, setRequestSuccessfulModalActive ] = useState(false)
    const [ allRequests, setAllRequests ] = useState(TableDatas);
    const [ errMessage, setErrMessage ] = useState('Sign up Failed');
    const [ successMessage, setSuccessMessage ] = useState('Sign up Failed');
    const [ requestSuccess, setRequestSuccess ] = useState(false);
	const [ requestFailed, setRequestFailed ] = useState(false);

    return(
        <AppContext.Provider 
            value={{
                someState, 
                setSomeState, 
                requestSuccessfulModalActive, 
                setRequestSuccessfulModalActive,
                allRequests,
                setAllRequests,
                requestSuccess,
                setRequestSuccess,
                errMessage,
                setErrMessage,
                requestFailed,
                setRequestFailed,
                successMessage,
                setSuccessMessage
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;