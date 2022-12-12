import React, {createContext, useState } from "react";
import { TableDatas } from "../components/Dashboard/data/TableData";
import DataBlog from "../pages/Blog/data";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [ someState, setSomeState ] = useState(0);
    const [ requestSuccessfulModalActive, setRequestSuccessfulModalActive ] = useState(true)
    const [ allRequests, setAllRequests ] = useState(TableDatas);
    const [item, setItem] = useState(DataBlog);
    const [ errMessage, setErrMessage ] = useState('Sign up Failed');
    const [ successMessage, setSuccessMessage ] = useState('Request succcessful');
    const [ requestSuccess, setRequestSuccess ] = useState(false);
	const [ requestFailed, setRequestFailed ] = useState(false);
	const [ mailModalActive, setMailModalActive ] = useState(false);
    const [ chatModalActive, setChatModalActive ] = useState(false)

    return(
        <AppContext.Provider 
            value={{
                someState, 
                setSomeState, 
                requestSuccessfulModalActive, 
                setRequestSuccessfulModalActive,
                allRequests,
                setAllRequests,
                item,
                setItem,
                requestSuccess,
                setRequestSuccess,
                errMessage,
                setErrMessage,
                requestFailed,
                setRequestFailed,
                successMessage,
                setSuccessMessage,
                mailModalActive,
                setMailModalActive,
                chatModalActive, 
                setChatModalActive
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;
