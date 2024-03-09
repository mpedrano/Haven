import React, { useState } from "react";

export default function Steps() {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNext = () => {
        setCurrentStep(currentStep + 1);
    };

    return (
        <div>
            <ul className="steps steps-vertical">
                <li className={currentStep >= 0 ? "step step-success" : "step step-neutral"}>Contact</li>
                <li className={currentStep >= 1 ? "step step-success" : "step step-neutral"}>Animal</li>
                <li className={currentStep >= 2 ? "step step-success" : "step step-neutral"}>Experience</li>
                <li className={currentStep >= 3 ? "step step-success" : "step step-neutral"}>Household</li>
                <li className={currentStep >= 4 ? "step step-success" : "step step-neutral"}>Additional</li>
            </ul>
            <button onClick={handleNext}>Next</button>
        </div>
    );
}
