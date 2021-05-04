import React from 'react'

import BarraDeNavegacao from '../barraDeNavegacao/barraDeNavegacao'

import whatsapp from '../../img/icons/svg/004-whatsapp-1.svg'
import email from '../../img/icons/email.svg'
import facebook from '../../img/icons/facebook.svg'
import instagram from '../../img/icons/svg/003-instagram.svg'

export default function contato() {
    return (
       <section className='cover cover5' id="contato">
            <BarraDeNavegacao/>   
            <div className='contato-informacao'>
                <div className='mensagem-contato'>
                    <h3>Deixe uma mensagem:</h3>
                    <form className='formulario' action='#contato' >
                        <label>Nome:</label>
                        <input type='text' placeholder='Ex: Ana Maria dos Santos'></input>
                        <label>E-mail:</label>
                        <input type='email'  placeholder='Ex: joão@gmail.com'></input>
                        <label>Telefone:</label>
                        <input type='tel' pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"  placeholder='Ex: (71) 9999-9999'></input>
                        <label>Sua mensagem:</label>
                        <textarea placeholder='Ex: Alguma curiosidade que você tenha sobre o osso trabalho, informaçoes da nossa localidade...'></textarea>
                        <button type="submit">enviar</button>
                    </form>
                </div>
                <div className='informacao-redes '>
                    <h4>Informações para Contato</h4>
                    <div>
                        <img src={whatsapp} />
                        <p>(71) 3251-5724</p>
                    </div>
                    <div>
                        <img src={email} />
                        <p>tropicalbordados@live.com</p>
                    </div>
                    <div>
                        <a href='http://www.facebook.com/tropicalbordadosba'>
                            <img src={facebook}/>
                        </a>
                         <a href='https://www.instagram.com/tropicalbordadosba/'>
                            <img src={instagram}/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
