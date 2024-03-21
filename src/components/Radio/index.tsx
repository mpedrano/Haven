import React from "react";
import styles from '@/components/Radio/Radio.module.css';

export default function Radio({ options, onSelect, questionIndex }: IRadio) {
    const handleRadioChange = (value: string) => {
        onSelect(value);
    };

    return (
        <main>
            <div className={`${styles["form-control"]} form-control`}>
                {options.map((answer, index) => (
                    <label key={index} className="label cursor-pointer">
                        <input
                            type="radio"
                            name={`radio-set-${questionIndex}`} 
                            className="radio checked:bg-info"
                            value={answer}
                            onChange={() => handleRadioChange(answer)}
                        />
                        <span className={`label-text ${styles["label-text"]}`}>{answer}</span>
                    </label>
                ))}
            </div>
        </main>
    );
}
