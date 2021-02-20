import React, { Fragment } from 'react'
import CardRosa from '../components/Welcome/CardRosa'
import Footer from '../components/layout/Footer'

import Header from '../components/layout/Header'
import Opiniones from '../components/Welcome/Opiniones'
import Caracteristicas from '../components/Welcome/Caracteristicas'
import Inicial from '../components/Welcome/Inicial'

const Principal = ({comentarios}) => {
    return (
        <Fragment>

        <div className="h-screen sm:h-full lg:h-screen bg-bottom bg-gray-50" style={{ backgroundImage: `url(/images/iniciobg1.webp)`}}>
            <Header />

           <Inicial/>
        </div>
        <div className="container mx-auto">
                <Opiniones comentarios={comentarios}/>

               <br/>
               <Caracteristicas/>
               <CardRosa/>
        </div>        

        <Footer/>
        </Fragment>
    )
}

export default Principal
