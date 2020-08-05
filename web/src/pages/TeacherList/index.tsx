import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css'

function TeacherList() {
    return (
        
        <div id="page-teachers-list" className="container">

            <PageHeader title="Estes são os proffys disponíveis">

                <form id="search-teachers">

                    <div className="input-block">

                        <label htmlFor="subject">Matérias</label>
                        <input id="subject"/>

                    </div>

                    <div className="input-block">

                        <label htmlFor="week_day">Dia da semana</label>
                        <input id="week_day"/>

                    </div>

                    <div className="input-block">

                        <label htmlFor="time">Horário</label>
                        <input id="time"/>

                    </div>

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