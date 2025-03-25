import styles from './Sobre.module.css';
import avatar from './images/avatar.jpg';
import { SiSpring } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { SiIntellijidea } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="Foto de Miguel Xavier" className={styles.avatar} />
                <div className={styles.txts}>
                    <p>Me chamo <strong>Miguel Xavier de Morais</strong><br />
                    Dev Full Stack<br />
                    Experiência em desenvolvimento ...</p>
                </div>
            </div>

            <h3 className={styles.techs}>Tecnologias e ferramentas</h3>

            <div className={styles.icones}>
                <div className={styles.spring}>
                    <SiSpring className={styles.icone} />
                    <p className={styles.txt}>Spring</p>
                </div>
                <div className={styles.java}>
                    <FaJava className={styles.icone} />
                    <p className={styles.txt}>Java</p>
                </div>
                <div className={styles.javascript}>
                    <IoLogoJavascript className={styles.icone} />
                <p className={styles.txt}>Javascript</p>
                </div>
                <div className={styles.git}>
                    <FaGitAlt className={styles.icone} />
                <p className={styles.txt}>Git</p>
                </div>
                <div className={styles.postgre}>
                    <BiLogoPostgresql className={styles.icone} />
                <p className={styles.txt}>Postgre</p>
                </div>
                <div className={styles.vscode}>
                    <VscVscode className={styles.icone} />
                <p className={styles.txt}>VS Code</p>
                </div>
                <div className={styles.intellij}>
                    <SiIntellijidea className={styles.icone} />
                <p className={styles.txt}>IntelliJ</p>
                </div>
                <div className={styles.react}>
                    <FaReact className={styles.icone} />
                <p className={styles.txt}>React</p>
                </div>
            </div>
        </section>
    )
}

export default Sobre