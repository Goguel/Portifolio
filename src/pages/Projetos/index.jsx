import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Projetos.module.css'

function Projetos() {

    const [ repositories, setRepositories ] = useState([]);

    useEffect(() => {
        const buscarRepositorios = async () => {
            const responses = await Promise.all([
                fetch('https://api.github.com/users/goguel/repos?page=1&per_page=50'),
                fetch('https://api.github.com/users/goguel-s-cia/repos?page=1&per_page=50'),
                fetch('https://api.github.com/repos/Null-bank/null_bank_backend')
            ])

            const data = await Promise.all(responses.map(res => res.json()));
            const allRepos = [...data[0], ...data[1], data[2]];

            const reposComLinguagem = await Promise.all(
                allRepos.map(async (repo) => {
                    const langResponse = await fetch(repo.languages_url);
                    const languages = await langResponse.json();
                    return { ...repo, languages};
                })
            );

            setRepositories(reposComLinguagem)
        };

        buscarRepositorios();

    }, []);

    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
           {
            repositories.length > 0 ? (
                <section className={styles.lista}>
                    {
                    repositories.map((repo) => 
                        (
                            <Card 
                                key = {repo.id} 
                                name = {repo.name}   
                                description = {repo.description} 
                                html_url = {repo.html_url} 
                                languages = {repo.languages}
                            />
                        )
                    )
                    }
                </section>
            ) : (
                <p>Carregando repositórios...</p>
            )
           }
        </section>
    )
}

export default Projetos