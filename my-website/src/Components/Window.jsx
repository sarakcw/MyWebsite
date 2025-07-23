import styles from "../../styles/Window.module.css";


function Window({title}) {
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <div className={styles.titleBar}>
                    {title}
                    <div className={styles.closeButton}>x</div>
                </div>
            </div>
        </div>
    );
}

export default Window;
