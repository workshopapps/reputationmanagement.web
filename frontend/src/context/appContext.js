import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [ someState, setSomeState ] = useState(0);
    const [ requestSuccessfulModalActive, setRequestSuccessfulModalActive ] = useState(true)
    return(
        <AppContext.Provider value={{someState, setSomeState, requestSuccessfulModalActive, setRequestSuccessfulModalActive}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;