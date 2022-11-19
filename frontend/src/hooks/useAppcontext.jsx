import { useContext } from "react"
import { AppContext } from "../context/appContext";

const useAppContext = () => {
    return useContext(AppContext)
}
export default useAppContext;