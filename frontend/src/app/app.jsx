import React from 'react'
import AppProvider from "../context/appContext";
import Router from "../router/router"
import Home from "../pages/home";

function App() {
    return(
        <div className="app">
            <AppProvider>
                <Router/>
            </AppProvider>
            <Home/>
        </div>
    )
}
export default App;