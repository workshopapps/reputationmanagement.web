import React from 'react'
import AppProvider from "../context/appContext";
import Router from "../router/router"

function App() {
    return(
        <div className="app">
            <AppProvider>
                <Router/>
            </AppProvider>
        </div>
    )
}
export default App;