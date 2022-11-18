import Footer from "../components/footer"
import Nav from "../components/nav"

const PageLayout = ({children}) => {
    return(
        <main>
            <Nav/>
            {children}
            <Footer/>
        </main>
    )
}
export default PageLayout;