import React from 'react'
import flor from '../../img/flor.png'
import menuCover from '../../img/desenhando-menu.svg'

export default function barraDeNavegacao() {
    return (     

        <div className='navigationBar'>
           
            <img src={flor}></img>
            <nav >
                <a href="#home">INÍCIO</a>
                <a href="#sobre">SOBRE NÓS</a>
                <a href="#servicos">SERVIÇOS</a>
                <a href="#portfolio">PORTFÓLIO</a>
                <a href="#contato">CONTATO</a>
            </nav>   
        </div>        
    )
}
