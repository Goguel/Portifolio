import styles from './card.module.css'

function Card({ name, description, html_url, languages }) {
    const linguagensValidas = ['Java', 'JavaScript', 'JSX', 'C', 'C++', 'TypeScript', 'HTML', 'CSS'];

    const linguagensFiltradas = Object.keys(languages || {}).filter(lang =>
        linguagensValidas.includes(lang)
    );
    
    const mapNameForLogo = (name) => {
        switch(name) {
            case 'Java': return 'java';
            case 'JavaScript': return 'javascript';
            case 'JSX': return 'react';
            case 'C': return 'c';
            case 'C++': return 'cpp';
            case 'TypeScript': return 'typescript';
            case 'HTML': return 'html';
            case 'CSS': return 'css';
            default: return 'generic';
        }
    }

    return (
        <section className={styles.card}>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className={styles.card_icones}>
            {linguagensFiltradas.length > 0 ? (
                linguagensFiltradas.map((lang, idx) => (
                    <div key={idx} className={styles.lang_tag}>
                        <img
                            src={`/logos/${mapNameForLogo(lang)}.svg`}
                            alt={lang}
                            className={styles.lang_logo}
                        />
                        <span>{lang}</span>
                    </div>
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
