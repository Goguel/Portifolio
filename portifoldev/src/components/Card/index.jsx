import styles from './Card.module.css'
import { BsFiletypeHtml, BsFiletypeCss, BsFiletypeJs, BsFiletypeJsx } from "react-icons/bs";
import { SiVite } from "react-icons/si";
import { FaCircleArrowRight } from "react-icons/fa6";

function Card() {
    return (
        <section className={styles.card}>
            <h3>Titulo do projeto</h3>
            <p>Descrição do projeto</p>
            <div className={styles.card_icones}>
                    <BsFiletypeHtml />
                    <BsFiletypeCss />
                    <BsFiletypeJs />
                    <BsFiletypeJsx />
                    <SiVite />
            </div>
            <button className={styles.card_button}>
              <p>Saiba mais</p><FaCircleArrowRight />
            </button>

        </section>
    )
}

export default Card
