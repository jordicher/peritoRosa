import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Inicial = () => {
    return (
        <Fragment>
            <div className="mt-5 text-center h-full">

                <div className="container mx-auto bg-indigo-100 rounded bg-opacity-30 p-3.5 sm:p-0 md:p-20">

                    <p className="text-3xl md:text-4xl font-extrabold text-green-600">Si tu opción es defender la verdad, vamos en el mismo camino</p>
                    <p className="text-2xl md:text-3xl font-bold text-black my-2 lg:my-20">Defendidos ante el Órgano Jurisdiccional y Tribunal más de 100 informes periciales</p>
                    <p className="text-lg text-black lg:text-2xl font-bold">Informes ámbito Civil, Penal y Contencioso Administrativo</p>
                    <p className="text-lg text-purple-800 my-2 lg:text-2xl font-bold animate-pulse">Presupuesto sin coste</p>


                    <Link to="/contacto">
                        <button className="bg-green-500 hover:bg-green-700 text-white py-3 px-5 rounded-full w-2/3 md:w-1/2 lg:w-1/3 text-center mx-auto uppercase font-bold">

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 inline">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg> Contactar </button>
                    </Link>


                </div>

            </div>
            <div className="hidden lg:block absolute w-full h-1/6 sm:hidden overflow-hidden -bottom-1">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-full">
                    <path className="fill-current text-white" d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"></path></svg></div>
        </Fragment>
    )
}

export default Inicial
