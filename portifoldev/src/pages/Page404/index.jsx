import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Container from "../../components/Container"
import styles from "./Page404.module.css"

function Page404() {
    return (
        <>
            <Header />
            <Container>
                <h2 className={styles.txt2}>Ops, houve algo de errado!</h2>
                <div className={styles.txts}>
                    <span className={styles.bigtxt}>404</span> <br />
                    <strong className={styles.redtxt}>Página não encontrada</strong>
                </div>
            </Container>
            <Footer />
        </>
    )
}

export default Page404