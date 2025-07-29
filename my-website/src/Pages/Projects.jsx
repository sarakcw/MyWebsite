import React from 'react'
import Header from "../Components/Header.jsx";
import Window from "../Components/Window.jsx";
import styles from "../../styles/Projects.module.css";
import redLine from "../assets/projects-page-line.svg"
import myWebsiteImg from "../assets/projects-mywebsite.png";
import ecomImg from "../assets/projects-ecommerce.png";

function Projects () {
    return (
        <>
            <Header/>
            <div className={styles.banner}>
                <div className={styles.heading}>
                    <h3>My Projects</h3>
                </div>
                <div className={styles.redLine}>
                    <img src={redLine}></img>
                </div>
            </div>
            <div className={styles.projectItem}>
                <Window title="My Website"  image={myWebsiteImg} />
                <div className={styles.projectDescription}>
                    <p>
                        You’re looking at it! This is my personal website which showcases all the projects I have done so far.
                        It is a React App which I had taken the time to learn over the winter break.
                        It’s not done yet, but I hope that visitors can catch a glimpse of my personality and interests.
                    </p>
                    <div >
                        <p>Go to <a href="https://github.com/sarakcw/MyWebsite">github repo</a></p>
                        <p>See <a href="https://www.figma.com/design/bAEXyVgp8O0g8xqvwASgWT/Sara-s-Website?node-id=0-1&t=oA8IDF4S6fBdWSAS-1 ">Figma prototype</a></p>
                    </div>

                </div>

            </div>
            <div className={styles.projectItem}>
                <div className={styles.projectDescription}>
                    <p>
                        This is a group project built by three developers as part of a university web systems development unit.
                        The application was created for a fictional business client and enables staff to manage products, coupons, orders,
                        and customer data through a secure and modular CakePHP-based web system.
                        It was designed with maintainability and future scalability in mind.
                    </p>
                    <div >
                        <p>Go to <a href="https://review.u25s1052.iedev.org/">website</a></p><br/>
                        <p>Log into the admin dashboard! <br/> Username: <span style={{color: "#A44A3F"}}>test@admin.com</span> <br/> Password: <span style={{color: "#A44A3F"}}>asdfasdf</span></p>

                    </div>

                </div>
                <Window title="E-commerce Platform" image={ecomImg} />
            </div>
            <div className={styles.projectItem}>
                <Window title="Java Playable Game" />
                <div className={styles.projectDescription}>
                    <p>
                        This project implements a playable prototype of the Santorini board game using object-oriented design principles.
                        It includes support for two players, a 5x5 flexible board, and 3 God cards: Artemis, Demeter and Triton.
                    </p>
                    <ul>
                        <li>
                            Dynamic 5x5 board setup with randomised worker and God card assignments
                        </li>
                        <li>
                            Worker movement with full rule validation
                        </li>
                        <li>
                            Level construction with validation
                        </li>
                        <li>
                            Turn switching logic
                        </li>
                        <li>
                            Win condition check
                        </li>
                    </ul>
                    <div>
                        <p>Go to <a href="https://github.com/sarakcw/OOP-Playable-Boardgame ">github</a></p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects;
