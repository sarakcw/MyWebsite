import styles from "./Window.module.css";

function QuickLinks({link = "#", image, name}){
    return(<div className={styles.quickLinksItem}>
        <a href={link}><img src={image} className={styles.windowImg}/></a>
        <a href={link}>{name}</a>
    </div>
    )
}
export default QuickLinks;