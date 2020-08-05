import React, { useState, FormEvent } from 'react'
import { useHistory } from 'react-router-dom';


import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import warningIcon from '../../assets/images/icons/warning.svg';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css'





function TeacherForm() {
    const history = useHistory();

    const [name, setName] = useState(''); //anotando um state para cada input
    const [avatar, setAvatar] = useState('') //anotando um state para cada input
    const [whatsapp, setWhatsapp] = useState('') //anotando um state para cada input
    const [bio, setBio] = useState('') //anotando um state para cada input

    const [subject, setSubject] = useState(''); //anotando um state para cada input
    const [cost, setCost] = useState(''); //anotando um state para cada input


    const [scheduleItems, setScheduleItems] = useState([ //primeiro parametro todo o scheduleItems, depois o segundo parametro é necessário criar uma função
        { week_day: 0, from: '', to: '' } //valor inicial
    ]);


    function addNewScheduleItem() {
        setScheduleItems([ //usando a função para mutar o state
            ...scheduleItems, //copiando um array
            { week_day: 0, from: '', to: '' } //substituindo todo o array por um novo array
        ]);

    }

    function setScheduleItemValue(position: number, field: string, value: string) { //percorrer o array, procurar o campo, atualizar o valor 
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position ) { // se o item que estou percorrendo dentro do map for igual  ao item que quero alterar
                return { ...scheduleItem, [field]: value } //os cochetes sao usados para apontar que é uma variavel
            }

            return scheduleItem;
        })

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) { //funçãoq ue será chamada quando o usuário der um submit no formulário
        e.preventDefault(); //usado para previnir do evento padrão de um formulário que é atualizar a tela.
        
        api.post('classes', { //criando o post na API
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() =>{
            alert('Cadastro realizado com sucesso');

            history.push('/'); //direcionando após adicionar
        }).catch(() => {
            alert('Erro no cadastro');
        })
    }


    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>{/*  representar um bloco de campos*/}
                        <legend>Seus dados</legend>
                        <Input name="name"
                            label="Nome Completo"
                            value={name} //recebe o value {name do state}
                            onChange={(e) => { setName(e.target.value) }}  //recebe um evento onChange que recebe o método do state que recebe o evento.target.value
                        />
                        <Input name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input name="whatsapp"
                            label="Whatsapp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                        <Textarea name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>{/*  representar um bloco de campos*/}
                        <legend>Sobre a aula</legend>

                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
                            options={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciencias', label: 'Ciencias' },
                                { value: 'Educação Física', label: 'Educação Fisíca' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' },

                            ]}

                        />

                        <Input name="cost"
                            label="Custo da sua Hora por aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                             Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}> {/* usando a função de criar um novo scheduleItem */}
                                + Novo horário
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        value= {scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week_day', e.target.value)}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '2', label: 'Terça-feira' },
                                            { value: '3', label: 'Quarta-feira' },
                                            { value: '4', label: 'Quinta-feira' },
                                            { value: '5', label: 'Sexta-feira' },
                                            { value: '6', label: 'Sábado' },

                                        ]}
                                    />
                                    <Input name="from"
                                     label="Das"
                                      type="time"
                                      value= {scheduleItem.from}
                                      onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                       />
                                    <Input name="to"
                                     label="Até"
                                      type="time"
                                      value= {scheduleItem.to}
                                      onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                       />
                                </div>
                            )
                        })}
                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                <button type="submit">
                    Salvar cadastro
                </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;