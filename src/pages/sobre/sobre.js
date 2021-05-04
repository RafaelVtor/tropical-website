import React from 'react'
import imageMaquina from '../../img/maquina.png'

export default function sobre() {
    return (
       <section className='cover cover2' id="sobre">
            
            <article className="contentBio" >
                <h2 class="display-4">Um pouco sobre nós:</h2><br></br>
                <p>A Tropical Bordados busca oferecer ao seu público um serviço de qualidade através de modernas técnicas de bordados computadorizados. </p>
                <p>Para nós o bordado é uma arte e, enquanto arte, ela tem o poder de encantar as pessoas. Dessa forma, a Tropical Bordados tem como objetivo a excelência em seus serviços no intuito de proporcionar satisfação a sua clientela, expressa pelo brilho no olhar de cada cliente toda vez que uma encomenda é entregue.</p>
                <br></br>
                <p>Com os melhores preços, nos disponibilizamos ao mercado com a certeza de poder proporcionar a você o bordados com as melhores qualidades.</p>
            </article>

            <img className='imageFace' src={imageMaquina}/>
              
        </section>  
    )
}

