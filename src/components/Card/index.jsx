import styles from './card.module.css';

function Card({ name, description, image, techs, github }) {

    const mapNameForLogo = (name) => {
        switch (name) {
            case 'C++': return 'cpp';
            case 'C': return 'c';
            case 'Html': return 'html';
            case 'Css': return 'css';
            case 'React': return 'react';
            case 'Javascript': return 'javascript';
            case 'Typescript':return 'typescript';
            case 'Java':return 'java';
            case 'Spring Boot': return 'springboot';
            case 'PostgreSQL': return 'postgresql';
            case 'Docker': return 'docker';
            case 'Angular': return 'angular';
            default: return name;
        }
    }

    return (
        <section className={styles.card}>
            <img src={image} alt={`Imagem do projeto ${name}`} className={styles.card_image} />

            <h3>{name}</h3>
            <p>{description}</p>

            <div className={styles.techs}>
                {techs.map((tech, index) => (
                    <span key={index} className={styles.badge}>
                        <img 
                            src={`/logos/${mapNameForLogo(tech)}.svg`} 
                            alt={tech}
                            className={styles.badge_icon}
                        />
                        {tech}
                    </span>
                ))}
            </div>

            <a href={github} target="_blank" rel="noopener noreferrer" className={styles.card_button}>
                <p>Saiba mais</p>
            </a>
        </section>
    );
}

export default Card;
