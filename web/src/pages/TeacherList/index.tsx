import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css'

function TeacherList() {
    return (
        
        <div id="page-teachers-list" className="container">

            <PageHeader title="Estes são os proffys disponíveis">

                <form id="search-teachers">

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
                        
                    />

                    <Input name="time" label="Horário" type="time" />
                    
                </form>

            </PageHeader>

            <main>

                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />

            </main>

        </div> 
    )
}

export default TeacherList;