import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
}

const Input: React.FC<InputProps> =  ({ label, name }) => {
    return (
        
        <div className="input-block">

            <label htmlFor={ name }>{ label }</label>
            <input id={ name }/>

        </div>

    );
}

export default Input;