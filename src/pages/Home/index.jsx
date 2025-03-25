import { Link } from 'react-router-dom'
import styles from './home.module.css'

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.apresentacao}>
            <p className={styles.txt}>
                <p>Olá, sou</p>
                <h1 className={styles.nome}>Miguel Xavier</h1> 
                <p>Dev Full Stack</p>
            </p>
            <Link to="/sobre" className={`${styles.btn} ${styles.btnInfo}`}>
                Saiba mais
            </Link>
            </div>
            <figure>
            <img className={styles.img_home} src="/feeling-proud-blue.svg" alt="Imagem da home" />
            </figure>
        </section>
    )
}

export default Home
