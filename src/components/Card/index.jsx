import styles from './card.module.css'
import { BsFiletypeHtml, BsFiletypeCss, BsFiletypeJs, BsFiletypeJsx } from "react-icons/bs";
import { SiVite } from "react-icons/si";
import { FaCircleArrowRight } from "react-icons/fa6";

function Card({ name, description, html_url }) {
    return (
        <section className={styles.card}>
            <h3>{ name }</h3>
            <p>{ description }</p>
            <div className={styles.card_icones}>
                    <BsFiletypeHtml />
                    <BsFiletypeCss />
                    <BsFiletypeJs />
                    <BsFiletypeJsx />
                    <SiVite />
            </div>
            <a href={html_url} target="_blank"  rel="noopener noreferrer" className={styles.card_button}>
              <p>Sabia mais</p><FaCircleArrowRight />
            </a>

        </section>
    )
}

export default Card
