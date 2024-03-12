
import React from "react";
import styles from '@/components/Steps/steps.module.css';

interface StepsProps {
    currentStep: number;
}

export default function Steps({ currentStep }: StepsProps) {
    return (
        <div>
            <ul className={`steps steps-vertical ${styles.steps}`}>
                <li className={currentStep >= 0 ? "step step-success" : "step step-neutral"}>Contact</li>
                <li className={currentStep >= 1 ? "step step-success" : "step step-neutral"}>Animal</li>
                <li className={currentStep >= 2 ? "step step-success" : "step step-neutral"}>Experience</li>
                <li className={currentStep >= 3 ? "step step-success" : "step step-neutral"}>Household</li>
                <li className={currentStep >= 4 ? "step step-success" : "step step-neutral"}>Additional</li>
            </ul>
        </div>
    );
}
