import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { //possibilitando que o input receba todos os tipos possiveis que um HTML pode receber
    name: string;
    label: string;

}

const Input: React.FC<InputProps> = ({label, name, ...rest }) => { //definindo um componente com as propriedades tipadas/ usando o ...rest operator para pegar todas as informações do HTMLInput
    return (
        <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} {...rest} /> {/* usando o spread operator para passar todas as infos que foram armazenadas no rest operator */}
    </div>
    );
}

export default Input;