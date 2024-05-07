import React from 'react'
import '../Styles/card.css'
import { Link } from 'react-router-dom'
export default function Card(props) {


    const redirectToSourceCode = () => {
        if (props.sourceCodeUrl) {
            window.open(props.sourceCodeUrl, '_blank');
        } else {
            alert('Source Code URL not available');
        }
    };

    const redirectToLiveOutput = () => {
        if (props.liveOutputUrl) {
            window.open(props.liveOutputUrl, '_blank');
        } else {
            alert('Live Output URL not available');
        }
    };


    return (
        <div className="main">
            <div className="cardTitle">
                {props.title}
            </div>
            <div className="cardBody">
                {props.body}
            </div>

            <div className="cardButtonContainer">
                <button className="cardButton" onClick={()=>{redirectToSourceCode(props.sourceCodeUrl)}}>
                    Source Code
                </button>
                <button className="cardButton" onClick={()=>{redirectToLiveOutput(props.liveOutputUrl)}}>
                    Live Output
                </button>
            </div>

        </div>
    )
}
