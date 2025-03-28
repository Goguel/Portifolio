import styles from "./Page404.module.css"

function Page404() {
    return (
        <section className={styles.page404}>
            <h2 className={styles.txt2}>Ops, houve algo de errado!</h2>
            <div className={styles.txts}>
                <span className={styles.bigtxt}>404</span> <br />
                <strong className={styles.redtxt}>Página não encontrada</strong>
            </div>
        </section>
    )
}

export default Page404