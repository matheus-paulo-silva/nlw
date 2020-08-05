import React, {SelectHTMLAttributes } from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> { //possibilitando que oSelect receba todos os tipos possiveis que um HTML pode receber
    name: string;
    label: string;
    options: Array<{
        value: string;
        label: string;
    }>;

}

const Select: React.FC <SelectProps> = ({label, name, options, ...rest }) => { //definindo um componente com as propriedades tipadas/ usando o ...rest operator para pegar todas as informações do HTMLInput
    return (
        <div className="select-block">
        <label htmlFor={name}>{label}</label>
        <select value="" id={name} {...rest}>   {/* usando o spread operator para passar todas as infos que foram armazenadas no rest operator */}
            <option value="" disabled hidden> Selecione uma opção </option>
            
            {options.map(option => { //fazendo um map dentro de options
                return <option key ={option.value} value={option.value}>{option.label}</option> //retorna a label da option
            })}
        </select> 
    </div>
    );
}

export default Select;