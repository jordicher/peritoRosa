import React, { Fragment, useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import CardComment from '../components/comentarios/CardComment'
import Cargando from '../components/Cargando'
import {v4 as uuidv4 } from 'uuid';

const Comentarios = ({ comentarios }) => {

    const [seleccionComentario, setSeleccionComentario] = useState(false);
 
    const comentariosSelect = () => comentarios.filter(coment => coment.abogado === seleccionComentario)

    return (
        <Fragment>
            <Header color="bg-gradient-to-r from-white to-blue-200"  />
            <div className="container mx-auto my-5">
                <h1 className="text-4xl font-extrabold">Comentarios</h1>

                <div className="flex items-center justify-between my-5">
                    <h4 className="text-2xl">Estás observando opiniones realizadas por {seleccionComentario ? "abogados" : "clientes"}</h4>
                    <div>
                        <button onClick={() => setSeleccionComentario(false)} 
                        className={seleccionComentario 
                            ? `p-2 text-xl bg-white text-gray-500 border-2 border-gray-600 mx-2`
                            : `p-2 text-xl bg-green-600 text-white border-2 border-green-600 mx-2`}>Clientes</button>
                        
                        <button onClick={() => setSeleccionComentario(true)} className={seleccionComentario 
                            ? `p-2 text-xl bg-green-600 text-white border-2 border-green-600 mx-2`
                            : `p-2 text-xl bg-white text-gray-500 border-2 border-gray-600 mx-2`} >Abogados</button>
                    </div>
                </div>       

                <div className="space-y-4">
                    { comentarios 
                    ? comentariosSelect().map(comentario => <CardComment key={uuidv4()} comment={comentario} />) 
                    : <Cargando/>
                    }
                </div>
            </div>
            <Footer/>
        </Fragment>
        
    )
}

export default Comentarios
