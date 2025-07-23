import React from 'react'
import Header from "../Components/Header.jsx";

export const Gallery = () => {
    const style = {
        container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            textAlign: "center",
            flexDirection: "column",
            fontFamily: '"Reddit Mono", sans-serif,',
            color: "#A44A3F"
        },
    };
    return (
        <>
        <Header/>
        <div style={style.container}>
            <h1 style={{fontSize: '50px'}}>Coming Soon!</h1>
        </div>
        </>

    )
}

export default Gallery;
