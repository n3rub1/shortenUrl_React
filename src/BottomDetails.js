import React from "react";
import brandRecognitionIcon from "./images/icon-brand-recognition.svg"
import detailedRecordsIcon from "./images/icon-detailed-records.svg"
import fullyCustomizableIcon from "./images/icon-fully-customizable.svg"

export function BottomDetails() {
    return (
        <div className="bottom-details-top">
            <div className="bottom-details-advanced-stats">
                <h3 className="bottom-details-advanced-stats-h3">Advanced Statistics</h3>
                <p className="bottom-details-advanced-stats-p">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>
            <div className="bottom-details">
                <div className="brand-recognition details">
                    <img src={brandRecognitionIcon} alt="brandRecognitionImage"></img>
                    <h5>Brand Recognition</h5>
                    <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                </div>

                <div className="detailed-records details">
                    <img src={detailedRecordsIcon} alt="brandRecognitionImage"></img>
                    <h5>Detailed Records</h5>
                    <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                </div>

                <div className="fully-customizable details">
                    <img src={fullyCustomizableIcon} alt="brandRecognitionImage"></img>
                    <h5>Fully Customizable</h5>
                    <p>Improve brand awarness and content discoverability through customizable links, supercharginf audience engagement.</p>
                </div>
                <div className="bottom-details-blue-border">

                </div>
            </div>
        </div>
    )
}