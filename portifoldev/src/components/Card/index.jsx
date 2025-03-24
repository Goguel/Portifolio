import styles from './Card.module.css'
import { BsFiletypeHtml, BsFiletypeCss, BsFiletypeJs, BsFiletypeJsx } from "react-icons/bs";
import { SiVite } from "react-icons/si";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom'

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
            <Link to={html_url} className={styles.card_button}>
              <p>Sabia mais</p><FaCircleArrowRight />
            </Link>

        </section>
    )
}

export default Card
