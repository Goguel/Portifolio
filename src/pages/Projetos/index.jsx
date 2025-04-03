import { useEffect, useState } from 'react'
import Card from '../../components/Card'
import styles from './Projetos.module.css'
function Projetos() {

    const [ repositories, setRepositories ] = useState([])

    useEffect(() => {
        const buscarRepositorios = async () => {
            const response = await fetch('https://api.github.com/users/goguel/repos?page=1&per_page=50')
            const response2 = await fetch('https://api.github.com/users/goguel-s-cia/repos?page=1&per_page=50')
            const response3 = await fetch('https://api.github.com/repos/Null-bank/null_bank_backend')
            const data = await response.json()
            const data2 = await response2.json()
            const data3 = await response3.json()
            setRepositories([...data, ...data2, data3])
        }
        buscarRepositorios()
    }, [])

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
                                language = {repo.language}
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