import React, {useEffect, useState} from 'react'
import styles from "../../styles/ComingSoon.module.css";

export const ComingSoon = () => {
    const totalRectangles = 10;
    const [visibleRectangles, setVisibleRectangles] = useState(0);
    const [isBlinking, setIsBlinking] = useState(true); // Keep track of blinking rectangle
    const [blinkCount, setBlinkCount] = useState(0); // Keep track of how many times the rectangle blinks

    useEffect(() => {
        if(visibleRectangles < totalRectangles){
            const loadInterval = setInterval(() => { // runs code every x milliseconds
                setVisibleRectangles(prev => prev + 1);
                console.log('visibleRect:', visibleRectangles);
            }, 200);

            return () => clearInterval(loadInterval);
        }else{ //last rectangle blinks
            const blinkInterval = setInterval(() => {
                setIsBlinking(prev => !prev); // Whatever that is not the previous state, !true => false
                setBlinkCount(prev => prev + 1); // Keep track of the number of blinks
            }, 500);

            return () => clearInterval(blinkInterval);
        }

    }, [visibleRectangles, blinkCount]);
    return (
        <div className={styles.container}>
            <div className={styles.window}>
                <div className={styles.titleBar}>
                    Coming Soon
                    <div className={styles.closeButton}>x</div>
                </div>
                <div className={styles.loadingWrapper}>
                    <div className={styles.loadingBar}>
                        {Array.from({ length: visibleRectangles }).map((_, i) => {
                            const lastRect = i === totalRectangles - 1;

                            return (
                                <div
                                    key={i}
                                    className={styles.loadingRectangle}
                                    style={{
                                        visibility: lastRect && !isBlinking ? "hidden" : "visible",
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                    <p style={{color: '#A44A3F', textAlign:"left", fontFamily:'"Reddit Mono", monospace'}}>Loading...</p>
                </div>
            </div>
        </div>
    )
}
