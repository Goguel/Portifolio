import styles from './card.module.css'
import { TbBrandCpp } from "react-icons/tb";
import { FaCircleArrowRight, FaJs, FaJava, FaReact, FaC} from "react-icons/fa6";

function Card({ name, description, html_url, language }) {
    const renderIcon = () => {
        switch(language) {
            case 'Java':
                return <FaJava />;
            case 'JavaScript':
                return <FaJs />;
            case 'JSX':
                return <FaReact />;
            case 'C':
                return <FaC />;
            case 'C++':
                return <TbBrandCpp />;
        }
    }
    return (
        <section className={styles.card}>
            
            <h3>{ name }</h3>
            <p>{ description }</p>
            <div className={styles.card_icones}>
                {renderIcon()}
            </div>
            <a href={html_url} target="_blank"  rel="noopener noreferrer" className={styles.card_button}>
              <p>Saiba mais</p><FaCircleArrowRight />
            </a>

        </section>
    )
}

export default Card
