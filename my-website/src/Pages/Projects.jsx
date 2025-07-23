import React from 'react'
import Header from "../Components/Header.jsx";
import Window from "../Components/Window.jsx";
import styles from "../../styles/Projects.module.css";
import redLine from "../assets/projects-page-line.svg"

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
                <Window title="My Website"/>
                <div className={styles.projectDescription}>
                    <p>
                    You’re looking at it! This...
                    The quantum pineapple waltzed elegantly through a corridor of translucent jellybeans, humming a tune only understood by sentient calculators.
                    Beneath the spaghetti sky, clocks melted into puddles of philosophical marmalade while a cactus recited Shakespeare in binary.
                    Meanwhile, a committee of  marshmallows debated the merits of  badminton,
                        unaware that the moon had just applied for a library card using a sock puppet named Reginald.
                    </p>
                    <div >
                        <p>website link: <a href="#"></a>something.com</p>
                        <p>github link: <a href="#"></a>something.com</p>
                        <p>figma prototype: <a href="#"></a>something.com</p>
                    </div>

                </div>

            </div>
            <div className={styles.projectItem}>
                <div className={styles.projectDescription}>
                    <p>
                        You’re looking at it! This...
                        The quantum pineapple waltzed elegantly through a corridor of translucent jellybeans, humming a tune only understood by sentient calculators.
                        Beneath the spaghetti sky, clocks melted into puddles of philosophical marmalade while a cactus recited Shakespeare in binary.
                        Meanwhile, a committee of  marshmallows debated the merits of  badminton,
                        unaware that the moon had just applied for a library card using a sock puppet named Reginald.
                    </p>
                    <div >
                        <p>website link: <a href="#"></a>something.com</p>
                        <p>github link: <a href="#"></a>something.com</p>
                        <p>figma prototype: <a href="#"></a>something.com</p>
                    </div>

                </div>
                <Window title="My Website" />
            </div>
            <div className={styles.projectItem}>
                <Window title="My Website" />
                <div className={styles.projectDescription}>
                    <p>
                        You’re looking at it! This...
                        The quantum pineapple waltzed elegantly through a corridor of translucent jellybeans, humming a tune only understood by sentient calculators.
                        Beneath the spaghetti sky, clocks melted into puddles of philosophical marmalade while a cactus recited Shakespeare in binary.
                        Meanwhile, a committee of  marshmallows debated the merits of  badminton,
                        unaware that the moon had just applied for a library card using a sock puppet named Reginald.
                    </p>
                    <div>
                        <p>website link: <a href="#"></a>something.com</p>
                        <p>github link: <a href="#"></a>something.com</p>
                        <p>figma prototype: <a href="#"></a>something.com</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Projects;
