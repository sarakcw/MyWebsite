import styles from './Header.module.css'
import websiteLogo from '../assets/Logo.png'

function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.logo} alt='website logo' src={websiteLogo}></img>
            <nav className={styles.headerNav}>
                <ul className={styles.headerNavList}>
                    <li className={styles.headerNavItem}><a href="#">Home</a></li>
                    <li className={styles.headerNavItem}><a href="#">My Projects</a></li>
                    <li className={styles.headerNavItem}><a href="#">Gallery</a></li>
                    <li className={styles.headerNavItem}><a href="#">Store</a></li>
                    <li className={styles.headerNavItem}><a href="#">About Me</a></li>
                    <li className={styles.headerNavItem}><a href="#">Contact Me</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;