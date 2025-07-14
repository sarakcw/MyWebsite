import styles from "./Window.module.css";

function Window() {
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <div className={styles.titleBar}>
                    Welcome home!
                    <div className={styles.closeButton}>x</div>
                </div>
            </div>
        </div>
    );
}

export default Window;