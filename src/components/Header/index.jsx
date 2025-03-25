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
            <Link to="/">
            <span>miguelXavier.dev</span>
            </Link>
            <nav 
                className={`${ styles.menuSandwich } ${ showMenu ? styles.show : ''}`}
                onClick={toggleMenu}
            >
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
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
