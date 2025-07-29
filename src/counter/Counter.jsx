import { useState } from "react";
import './Counter.css'
import '../index.css'
import Intro from "../components/Intro";

function CounterPage () {
    
    const [loveCount, setLoveCount] = useState(0);
    const [hateCount, setHateCount] = useState(0);
    
    // prev is provided by react is a previous argument that takes the last state of the state
    const handleLoveClick = () => setLoveCount(prev => prev +1)
    const handleHateClick = () => setHateCount(prev => prev +1)
   

    return (
        
    <div className="container">
        {/* <div className="pageIntro">
            <h1 className="introTitle">Counter</h1>
            <div className="br"></div>
            <p className="description">This is a small counter project using useState hooks to remember the number of clicks per button.</p>
        </div> */}

            <Intro title="Counter" description="This is a small counter project using useState hooks to remember the number of clicks per button."/>

        <div className="counter">
            <h2>Do you love cats or hate life?</h2>
            <div className="counterContainer">
                <div className="loveContainer">
                    <img src="../cat.jpeg" className="imageContainer"></img>
                    <p>People that love cats: {loveCount}</p>
                    <button className="countButton" onClick={handleLoveClick}>I love cats</button>
                </div>
                <div className="hateContainer">
                    <img src="../hell.jpeg" className="imageContainer"></img>
                    <p>People that hate life: {hateCount}</p>
                    <button className="countButton" onClick={handleHateClick}>I hate life</button>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CounterPage;