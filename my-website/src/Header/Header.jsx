import styles from './Header.module.css'
function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.headerTitle}>SARA</h1>
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