import styles from "../../styles/Window.module.css";


function Window({title, image}) {
    return (
        <div className={styles.windowContainer}>
            <div className={styles.window}>
                <div className={styles.titleBar}>
                    {title}
                    <div className={styles.closeButton}>x</div>
                </div>
                <div className={styles.imgWrapper}>
                    <img src={image} className={styles.windowImg}/>
                </div>
            </div>
        </div>
    );
}

export default Window;
