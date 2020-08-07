import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';

function TeacherForm() {
    return (
        
        <div id="page-teachers-form" className="container">

            <PageHeader 
                title="Que incrível que você quer dar aulas!"
                description = "O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>

                <fieldset>

                    <legend>Seus dados</legend>

                    <div className="input-block">

                        <label htmlFor="name">Nome Completo</label>
                        <input id="name"/>

                    </div>

                    <div className="input-block">

                        <label htmlFor="avatar">Avatar</label>
                        <input id="avatar" placeholder = "http://" />

                    </div>


                    <div className="input-block">

                        <label htmlFor="whatsapp">Whatsapp</label>
                        <input id="whatsapp"/>

                    </div>


                </fieldset>

            </main>

        </div>
        
    )
}

export default TeacherForm;