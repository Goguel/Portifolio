import styles from './home.module.css'

function Home() {
    return (
        <section id="home" className={styles.home}>
            <div className={styles.apresentacao}>
            <p className={styles.txt}>
                <p>Olá, sou</p>
                <h1 className={styles.nome}>Miguel Xavier</h1> 
                <p>Dev Full Stack</p>
            </p>
            <a href="#sobre" className={`${styles.btn} ${styles.btnInfo}`}>
                Saiba mais
            </a>
            </div>
            <figure>
            <img className={styles.img_home} src="/homeImg.svg" alt="Imagem da home" />
            </figure>
        </section>
    )
}

export default Home
