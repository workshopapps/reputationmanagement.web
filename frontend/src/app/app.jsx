import AppProvider from "../context/appContext";
import Router from "../router/router"

const App = () => {
    return(
        <div className="app">
            <AppProvider>
                <Router/>
            </AppProvider>
        </div>
    )
}
export default App;