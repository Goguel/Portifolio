import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { HiMenu } from "react-icons/hi";
import { useState } from 'react';

function Header() {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header className={styles.header}>
            <a href="#home">
            <span>miguelXavier.dev</span>
            </a>
            <nav 
                className={`${ styles.menuSandwich } ${ showMenu ? styles.show : ''}`}
                onClick={toggleMenu}
            >
                <a href="#sobre">Sobre</a>
                <a href="#projetos">Projetos</a>
                <a href="#contatos">Contatos</a>
            </nav>
            <div 
                className={styles.menuButton}
                onClick={toggleMenu}
            >
                <HiMenu />
            </div>
        </header>
    )
}

export default Header
