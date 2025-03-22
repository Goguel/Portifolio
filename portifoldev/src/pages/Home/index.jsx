import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import Container from '../../components/Container'
import styles from './Home.module.css'

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.apresentacao}>
            <p>
                Olá, sou <br/>
                <span>Miguel Xavier</span> <br/>
                Dev Full Stack
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
