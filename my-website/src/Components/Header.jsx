import styles from '../../styles/Header.module.css'
import websiteLogo from '../assets/Logo.png'
import {Link, NavLink} from "react-router-dom";

function Header() {
    return (
        <div className={styles.header}>
            <img className={styles.logo} alt='website logo' src={websiteLogo}></img>
            <nav className={styles.headerNav}>
                <ul className={styles.headerNavList}>
                    <li className={styles.headerNavItem}>
                        <NavLink to="/"
                                 className={({ isActive }) => isActive ? styles.activeLink : undefined} end>
                            Home
                        </NavLink>
                    </li>
                    <li className={styles.headerNavItem}>
                        <NavLink to="/projects"
                                 className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                            My Projects
                        </NavLink>
                    </li>
                    <li className={styles.headerNavItem}>
                        <NavLink to="/gallery"
                                 className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                            Gallery
                        </NavLink>
                    </li>
                    <li className={styles.headerNavItem}>
                        <NavLink to="/store"
                                 className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                            Store
                        </NavLink>
                    </li>
                    <li className={styles.headerNavItem}>
                        <NavLink to="/about-me"
                                 className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                            About Me
                        </NavLink>
                    </li>
                    <li className={styles.headerNavItem}>
                        <NavLink to="/contact-me"
                                 className={({ isActive }) => isActive ? styles.activeLink : undefined}>
                            Contact Me
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;