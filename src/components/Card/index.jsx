import styles from './card.module.css';

function Card({ name, description, image, techs, github, live }) {

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
            case 'Spring Security': return 'springsecurity';
            case 'PostgreSQL': return 'postgresql';
            case 'Docker': return 'docker';
            case 'Angular': return 'angular';
            case 'RxJS': return 'rxjs';
            case 'Render': return 'render';
            default: return name;
        }
    }

    return (

        <section className={styles.card} data-aos="zoom-in-left">

            <img src={image} alt={`Imagem do projeto ${name}`} className={styles.card_image} />
            <h2>{name}</h2>
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

            <div className={styles.card_buttons}>
                <a href={github} target="_blank" rel="noopener noreferrer">
                        <span className={styles.card_button}>
                            <img 
                                src="/logos/github.svg" 
                                alt="Github" 
                                className={styles.card_button_icon} 
                            />
                            <p>Github</p>
                        </span>
                </a>
                {live && (
                    <a href={live} target="_blank" rel="noopener noreferrer">
                        <span className={styles.card_button}>
                            <img 
                                src="/logos/external-link.svg" 
                                alt="Live" 
                                className={styles.card_button_icon}
                            />
                            <p>Live</p>
                        </span>
                    </a>
                )}
            </div>
        </section>
    );
}

export default Card;
