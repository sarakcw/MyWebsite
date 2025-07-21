import React from 'react'
import Background from "../assets/Home - Background.svg";
import Header from "../Components/Header.jsx";
import WindowHome from "../../styles/WindowHome.jsx";

export const HomePage = () => {
    return (
        <>
            <div className="page-container">
                <img className = "background" src={Background}></img>

                <Header />
                <WindowHome/>
            </div>
        </>
    )
}

export default HomePage;
