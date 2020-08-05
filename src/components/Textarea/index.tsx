import React, { TextareaHTMLAttributes } from 'react'

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> { //possibilitando que o Textarea receba todos os tipos possiveis que um HTML pode receber
    name: string;
    label: string;

}

const Textarea: React.FC<TextareaProps> = ({label, name, ...rest }) => { //definindo um componente com as propriedades tipadas/ usando o ...rest operator para pegar todas as informações do HTMLTextarea
    return (
        <div className="textarea-block">
        <label htmlFor={name}>{label}</label>
        <textarea id={name} {...rest} /> {/* usando o spread operator para passar todas as infos que foram armazenadas no rest operator */}
    </div>
    );
}

export default Textarea;