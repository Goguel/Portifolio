import styles from './card.module.css'
import { TbBrandCpp } from "react-icons/tb";
import { FaCircleArrowRight, FaJs, FaJava, FaReact, FaC} from "react-icons/fa6";

function Card({ name, description, html_url, languages }) {
    const linguagensValidas = ['Java', 'JavaScript', 'JSX', 'C', 'C++', 'TypeScript', 'HTML', 'CSS'];

    const linguagensFiltradas = Object.keys(languages || {}).filter(lang =>
        linguagensValidas.includes(lang)
    );
    /*
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
    }*/
    return (
        <section className={styles.card}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.card_icones}>
            {linguagensFiltradas.length > 0 ? (
                linguagensFiltradas.map((lang, idx) => (
                    <span key={idx} className={styles.lang_tag}>{lang}</span>
                ))
            ) : (
                <span className={styles.lang_tag}>Linguagem não listada</span>
            )}
        </div>
        <a href={html_url} target="_blank" rel="noopener noreferrer" className={styles.card_button}>
            <p>Saiba mais</p>
        </a>
    </section>
    )
}

export default Card
