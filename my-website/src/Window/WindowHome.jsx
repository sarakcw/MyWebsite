import styles from "./Window.module.css";
import myProjectsImg from "../assets/Crafting_Table-projects.png";
import galleryImg from "../assets/Baroque-gallery.png";
import storeImg from "../assets/Oak_Hanging_Sign-store.png";
import aboutImg from "../assets/Bee-about.webp";
import contactImg from "../assets/Writable_Book-contact.png";
import cartImg from "../assets/Chest-cart.png";
import QuickLinks from "./QuickLinks.jsx";

function WindowHome() {
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <div className={styles.titleBar}>
                    Welcome home!
                    <div className={styles.closeButton}>x</div>
                </div>
                <div className={styles.quickLinksContainer}>
                    <QuickLinks image={myProjectsImg} name= "My Projects"/>
                    <QuickLinks image={galleryImg} name= "Gallery"/>
                    <QuickLinks image={storeImg} name= "Store"/>
                    <QuickLinks image={aboutImg} name= "About"/>
                    <QuickLinks image={contactImg} name= "Contact"/>
                    <QuickLinks image={cartImg} name= "Cart"/>
                </div>
            </div>
        </div>
    );
}

export default WindowHome;