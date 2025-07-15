import styles from "./Window.module.css";
import myProjectsImg from "../assets/my-projects.jpeg";

function WindowHome() {
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <div className={styles.titleBar}>
                    Welcome home!
                    <div className={styles.closeButton}>x</div>
                </div>
                <div className={styles.quickLinksContainer}>

                    <div className={styles.quickLinksItem}>
                        <a href="#"><img src={myProjectsImg} className={styles.windowImg}/></a>
                        <a href="#">My Projects</a>
                    </div>
                    <div className={styles.quickLinksItem}>
                        <a href="#"><img src={myProjectsImg} className={styles.windowImg}/></a>
                        <a href="#">Gallery</a>
                    </div>
                    <div className={styles.quickLinksItem}>
                        <a href="#"><img src={myProjectsImg} className={styles.windowImg}/></a>
                        <a href="#">Store</a>
                    </div>
                    <div className={styles.quickLinksItem}>
                        <a href="#"><img src={myProjectsImg} className={styles.windowImg}/></a>
                        <a href="#">About Me</a>
                    </div>
                    <div className={styles.quickLinksItem}>
                        <a href="#"><img src={myProjectsImg} className={styles.windowImg}/></a>
                        <a href="#">Contact Me</a>
                    </div>
                    <div className={styles.quickLinksItem}>
                        <a href="#"><img src={myProjectsImg} className={styles.windowImg}/></a>
                        <a href="#">Your Cart</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default WindowHome;