import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (

        <article className="teacher-item">

            <header>

                <img src="https://instagram.fsjk6-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93360269_230162561393725_3007707181538607104_n.jpg?_nc_ht=instagram.fsjk6-1.fna.fbcdn.net&_nc_ohc=qHqsDFI96jgAX9fnuK7&oh=6ed3199433fde5bd6e0cb6804cc4b4b2&oe=5F53F2CC" alt="Paulo Reis" />

                <div>
                    
                    <strong>Paulo Reis</strong>

                    <span>Programação</span>

                </div>

            </header>

            <p>Melhor programador e empreendedor do mundo

                <br /> <br />

                Novo na programação, mas já apaixonado pela área. Desejo e vou dominar JavaScript e me tornar um desenvolvedor Fullstack com as tecnologias Omnistack.

            </p>

            <footer>

                <p>
                    Preço/hora
                    <strong>R$ 1.000.000.000</strong>

                </p>

                <button type="button">
                    <img src={ whatsappIcon } alt="Whatsapp" />
                    Entrar em contato
                </button>
                
            </footer>

        </article>

    );
}

export default TeacherItem;