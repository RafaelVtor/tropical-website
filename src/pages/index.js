import React from 'react'
import ReactDOM from 'react-dom'

import Head from 'next/head';

import Sobre from './sobre/sobre'
import Servicos from './servicos/servicos'
import Portfolio from './portfolio/portfolio'
import Contato from './contato/contato'
import Capa from './capa/capa'
import Rodape from './rodape/rodape';
import BarraDeNavegacao from './barraDeNavegacao/barraDeNavegacao'

import favicon from "../../favicon.svg"

export default function Home() {

    return (
        <div className="divBudy">
            <Head>

                <link rel="shortcut icon" href={favicon} />

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></link>
                <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
                <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet" />
            </Head>


            <Capa />
            <Sobre />
            <Servicos />
            {/* <Portfolio/> */}
            <Contato />
            <Rodape />
            <BarraDeNavegacao />

        </div>
    )
}