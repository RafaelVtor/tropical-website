import React from 'react'


export default function servicos() {
    return (
        <section className='cover cover3 container-fluid' id='servicos'>

            <div id='title-servicos'>O que bordamos?</div>

            <div className='servicos-detalhes row'>
                <div className="col">
                    <h5>LOGOMARCAS</h5>
                    <p className="card-text">Logomarca da instituição (Escolas, Empresas, Órgãos públicos e privados etc.).</p>
                </div>
                <div className="col">
                    <h5>DESENHOS INFANTIS</h5>
                    <p className="card-text">Bordados diversos, pois disponibilizamos de sistema de criação que nos possibilita transformar qualquer desenho (marca, logo, emblema etc.) em bordado.</p>
                </div>
                <div className="col">
                    <h5>NOMES EM GERAL</h5>
                    <p className="card-text">Nomes grandes ou pequenos (roupas diversas, toalhas grandes e pequenas, lençóis, lenços, babadores de crianças etc.).</p>
                </div>

            </div>


        </section>
    )
}
