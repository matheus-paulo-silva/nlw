import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/68401114?s=460&u=6e97dde5f981571dc6a8d9ebfdb60e8f2b6de65f&v=4" alt="Matheus Paulo Silva"></img>
             <div>
                 <strong>Matheus Paulo Silva</strong>
                 <span>Matemática</span>
             </div>
         </header>

         <p>
             Professor de Matemática avançada.
             <br /><br />
             Entusiasta por ensinar matemática aos seus alunos e por resolver os problemas das melhroes formas possíveis utilizando sempre os conceitos básicos da matemática para soluciona-los.
         </p>

         <footer>
             <p>
                 Preço/hora
                 <strong>R$: 150,00</strong>
             </p>
             <button type="button">
                 <img src={whatsappIcon} alt="Whatsapp"/>
                 Entrar em contato
             </button>
         </footer>
    </article>
    )
    
}

export default TeacherItem;
