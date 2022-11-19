import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({children}) => {
    const [ someState, setSomeState ] = useState(0)
    return(
        <AppContext.Provider value={{someState, setSomeState}}>
            {children}
        </AppContext.Provider>
    )
}
export default AppProvider;