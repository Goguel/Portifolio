import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

function PageBase({ children }) {
    return (
        <main>
            <Header />
            <Container>
                 { children }
            </Container>
            <Footer />
        </main>
    )
}

export default PageBase
