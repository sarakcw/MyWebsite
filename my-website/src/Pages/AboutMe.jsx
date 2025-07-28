import React from 'react'
import Header from "../Components/Header.jsx";
import {ComingSoon} from "../Components/ComingSoon.jsx";

export const AboutMe = () => {
    const style = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            flexDirection: "column",
            color: "#A44A3F"
        },
    };
    return (
        <>
            <Header/>
            <div style={style.container}>
                <ComingSoon/>
            </div>
        </>

    )
}
