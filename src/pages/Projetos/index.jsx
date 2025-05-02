import Card from '../../components/Card'
import styles from './Projetos.module.css'
import projetos from '../../data/projetos.js'

function Projetos() {
    return (
        <section className={styles.projetos}>
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
                    />
                ))}
            </section>
        </section>
    );
}

export default Projetos