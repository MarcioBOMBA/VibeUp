import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

type InputTextProps = {
    label: string;
    name: string;
    tipo?: string;
    placeholder?: string;
    error?: string | null;
};

export const InputText: React.FC<InputTextProps> = ({
    label,
    name,
    tipo,
    placeholder,
    error = null,
}) => {
    const [showPass, setShowPass] = useState(false);

    const togglePass = () => {
        setShowPass(!showPass);
    };

    return (
        <div className="input-text">
            <label htmlFor="name">{label}</label>
            <div className="input-container">
                <input
                    type={tipo ? ( showPass ? "text" : tipo) : 'text'}
                    id={name}
                    name={name}
                    className="w-100"
                    placeholder={placeholder}
                />
                {tipo === 'password' ? (
                    <button className="pass-eye" type='button' onClick={togglePass}>
                        {showPass ? (
                            <FaEyeSlash />
                        ) : (
                            <FaEye />
                        )}
                    </button>
                ) : null}
            </div>
            <span className="input-error">{error}</span>
        </div>
    );
};
