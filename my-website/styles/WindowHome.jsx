import styles from "./Window.module.css";
import myProjectsImg from "../src/assets/Crafting_Table-projects.png";
import galleryImg from "../src/assets/Baroque-gallery.png";
import storeImg from "../src/assets/Oak_Hanging_Sign-store.png";
import aboutImg from "../src/assets/Bee-about.webp";
import contactImg from "../src/assets/Writable_Book-contact.png";
import cartImg from "../src/assets/Chest-cart.png";
import QuickLinks from "../src/Components/QuickLinks.jsx";

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