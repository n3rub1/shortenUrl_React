import React from "react";
import HeroImage from "./images/illustration-working.svg"

export function Hero() {
    return (
        <div className="Hero">
            <div className="hero-left-side">
                <h1 className="hero-header">More than just shorter links</h1>
                <h2 className="hero-second-header">Build your brand's recoginition and get detailed insights on how your links are performing.</h2>
                <p className="hero-get-started">Get Started</p>
            </div>
            <div>
                <img className="hero-image" src={HeroImage} alt="workingImage"></img>
            </div>
        </div>
    )
}