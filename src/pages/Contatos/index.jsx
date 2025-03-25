import styles  from './Contatos.module.css'
import { FiMail } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Contatos() {
    return (
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre.</p>

            <div className={styles.icones}>
                <a href='mailto:miguelxmorais@gmail.com' target='_blank' rel='noopener noreferrer'>
                <FiMail className={styles.icone} />
                </a>
                <a href='https://www.github.com/Goguel' target='_blank' rel='noopener noreferrer'>
                <IoLogoGithub className={styles.icone} />
                </a>
                <a href='https://www.linkedin.com/in/miguel-xavier-de-morais/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className={styles.icone} />
                </a>
                <a href='https://www.instagram.com/miguelxdev/' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className={styles.icone} />
                </a>
            </div>
        </section>
    )
}

export default Contatos