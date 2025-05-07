import styles from './Sobre.module.css';
import avatar from './images/Avatar.jpg';

function Sobre() {
    return (
        <section id="sobre" className={styles.sobre}>
            <div className={styles.bio}>
                <img src={avatar} alt="Foto de Miguel Xavier" className={styles.avatar} />
                <div className={styles.txts}>
                    <p>Me chamo <strong>Miguel Xavier de Morais</strong><br />
                    Desenvolvedor Full Stack<br />
                    Tenho experiência na criação de APIs RESTFul, integração com banco de dados,<br />
                    construção de interfaces modernas e responsivas.<br />
                    Além de conhecimento de Design Patterns, POO, análise de requisitos e boas práticas.</p>
                    <br />
                    <p>Adoro solucionar problemas e desafios lógicos, sempre procuro escutar bem e prestar<br />
                    atenção aos detalhes para encontar a melhor solução possível. Sempre buscando conhecimento,<br />
                    atualmente, estou me aprofundando em tecnologias como Spring Boot e Angular. </p>
                </div>
            </div>

            <div className={styles.description}>
                <div className={styles.descriptiontech}>
                    <h3>Tecnologias e ferramentas</h3>

                    <div className={styles.icones}>
                        {[
                            { nome: "Java", arquivo: "java.svg" },
                            { nome: "JavaScript", arquivo: "javascript.svg" },
                            { nome: "TypeScript", arquivo: "typescript.svg" },
                            { nome: "C", arquivo: "c.svg" },
                            { nome: "C++", arquivo: "cpp.svg" },
                            { nome: "PostgreSQL", arquivo: "postgresql.svg" },
                            { nome: "Spring", arquivo: "spring.svg" },
                            { nome: "Html", arquivo: "html.svg" },
                            { nome: "Css", arquivo: "css.svg" },
                            { nome: "Angular", arquivo: "angular.svg" },
                            { nome: "React", arquivo: "react.svg" },
                            { nome: "Docker", arquivo: "docker.svg" },
                            { nome: "Vercel", arquivo: "vercel.svg" },
                            { nome: "Insomnia", arquivo: "insomnia.svg" },
                            { nome: "Git", arquivo: "git.svg" },
                            { nome: "GitHub", arquivo: "github.svg" },
                            { nome: "GitHub Actions", arquivo: "githubactions.svg" },
                            { nome: "VS Code", arquivo: "vscode.svg" },
                            { nome: "IntelliJ", arquivo: "intellij.svg" },
                            { nome: "WebStorm", arquivo: "webstorm.svg" },
                            { nome: "Render", arquivo: "render.svg" },                        
                            
                        ].map((tech, idx) => (
                            <div key={idx} className={styles.tecnologia}>
                                <img 
                                    src={`/logos/${tech.arquivo}`} 
                                    alt={tech.nome}
                                    className={styles.icone}
                                />
                                <p className={styles.txt}>{tech.nome}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.descriptioneduc}>
                    <h3>Formação acadêmica</h3>
                    <div className={styles.education}>
                        <p>Bacharelado em Tecnologia da Informação</p>
                        <p>Universidade Federal do Rio Grande do Norte (UFRN)</p>
                        <p>Fevereiro 2024 - Atualmente</p>
                    </div>
                    <div className={styles.education}>
                        <p>Técnico em Informática</p>
                        <p>Escola Agricola de Jundiaí (EAJ/UFRN)</p>
                        <p>Março 2021 - Dezembro 2023</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sobre;
