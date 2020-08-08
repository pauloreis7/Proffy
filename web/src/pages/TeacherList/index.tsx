import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css'

function TeacherList() {

    const [ teachers, setTeachers ] = useState([])

    const [ subject, setSubject ] = useState('')
    const [ weekDay, setWeekDay ] = useState('')
    const [ time, setTime ] = useState('')

    async function searchTeachers(e: FormEvent) {
        e.preventDefault()

        const response = await api.get('/classes', {
            params: {
                subject,
                week_day: weekDay,
                time
            }
        })

        setTeachers(response.data)
    }

    return (
        
        <div id="page-teachers-list" className="container">

            <PageHeader title="Estes são os proffys disponíveis">

                <form id="search-teachers" onSubmit={ searchTeachers }>

                    <Select 
                        name="subject" 
                        label="Matéria"
                        options={ [

                            { value: "Português", label: "Português" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "História", label: "História" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Física", label: "Física" },
                            { value: "Química", label: "Química" },
                            { value: "Filosofia", label: "Filosofia" },
                            { value: "Sociologia", label: "Sociologia" },
                            { value: "Artes", label: "Artes" },
                            { value: "Educação física", label: "Educação física" }

                        ] }
                        
                        value={ subject }
                        onChange={ e => setSubject(e.target.value) }
                    />

                    <Select 
                        name="week_day" 
                        label="Dia da semana"
                        options = { [
                            
                            {value: "0", label: "Domingo"},
                            {value: "1", label: "Segunda-feira"},
                            {value: "2", label: "Terça-feira"},
                            {value: "3", label: "Quarta-feira"},
                            {value: "4", label: "Quinta-feira"},
                            {value: "5", label: "Sexta-feira"},
                            {value: "6", label: "Sábado"}

                        ] }
                        
                        value={ weekDay }
                        onChange={ e => setWeekDay(e.target.value) }
                    />
                    
                    <Input 
                        name="time" 
                        label="Horário" 
                        type="time"
                        value={ time }
                        onChange={ e => setTime(e.target.value) }
                    />

                    <button type="submit">Buscar</button>
                    
                </form>

            </PageHeader>

            <main>

                { teachers.map( (teacher: Teacher) => {

                    return <TeacherItem key={ teacher.id } teacher={ teacher } />
                    
                })}
                
            </main>

        </div> 
    )
}

export default TeacherList;