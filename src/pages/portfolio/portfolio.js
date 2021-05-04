import React from 'react'


export default function portfolio() {
    return (
         <section className='cover cover4' id="portfolio">

             <div className='lista-portfolio'>

                <div id="demo" class="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#demo" data-slide-to="0" class="active"></li>
                        <li data-target="#demo" data-slide-to="1"></li>
                        <li data-target="#demo" data-slide-to="2"></li>
                    </ul>

                    <div class="carousel-inner" id='carousel-inner-portfolio'>
                        <div class="carousel-item active">                            
                                <img id='img-carousel' src="https://www.itau.com.br/content/dam/itau/varejo/canais-itau/app-light/cliente-itau-usando-celular-com-tela-do-app-light.png" alt="Los Angeles"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                            
                                </div>
                        </div>
                        <div class="carousel-item" >
                            <img id='img-carousel' src="https://timeline.canaltech.com.br/350964.700/como-sacar-fgts-app-celular.jpg" alt="Chicago"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                            
                            </div>
                        </div>
                        <div class="carousel-item" >
                            <img id='img-carousel' src="https://www.dw.com/image/54313360_101.jpg" alt="New York"/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>                            
                            </div>
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>

                </div>

               </div>
        </section>
    )
}
