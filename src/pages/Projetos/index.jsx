import Card from '../../components/Card'
import styles from './Projetos.module.css'
import projetos from '../../data/projetos.js'

function Projetos() {
    return (
        <section id="projetos" className={styles.projetos}>
            <h2>Projetos</h2>
            <section className={styles.lista}>
                {projetos.map((projeto) => (
                    <Card 
                        key={projeto.name}
                        name={projeto.name}
                        description={projeto.description}
                        image={projeto.image}
                        techs={projeto.techs}
                        github={projeto.github}
                        live={projeto.live}
                    />
                ))}
            </section>
        </section>
    );
}

export default Projetos