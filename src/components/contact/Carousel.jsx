import React, { Fragment, useState } from 'react'

const Carousel = ({ comentarios }) => {

    const [posicion, setPosicion] = useState(0);

    const comentarioClick = (accion) => {
        if (!comentarios) return;
        console.log(comentarios)

        if (accion === 'siguiente') {
            if (posicion === comentarios.length - 1) {
                return setPosicion(0);
            }
            setPosicion(posicion + 1)
        }
        else {
            if (posicion === 0) {
                return setPosicion(comentarios.length - 1);
            }
            setPosicion(posicion - 1);
        }
    }


    return (
        <Fragment>
            <div className="mt-2">
                <div className="rounded-t-xl p-6 bg-gradient-to-r from-indigo-50 to-indigo-100">
                    <div className="flex flex-wrap md:flex-nowrap space-x-4 items-center justify-between">

                        <button onClick={() => comentarioClick("anterior")}
                            className="flex-none w-16 h-16 rounded-md bg-indigo-300 text-white hover:bg-white hover:text-indigo-500 text-2xl font-extrabold flex items-center justify-center mb-2 md:my-0">
                            <svg className="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                            </svg>
                        </button>

                        <div className="rounded-md bg-indigo-500 text-white p-2 order-3 md:order-none">
                            {comentarios ? (<Fragment>
                                <p className="text-xl lg:text-2xl lg:font-bold text-justify">{comentarios[posicion].comentario}</p>
                                <p className="text-xl text-center">{comentarios[posicion].nombre} - {comentarios[posicion].ubicacion}</p>

                            </Fragment>) : null}
                        </div>

                        <button onClick={() => comentarioClick("siguiente")}
                            className="flex-none w-16 h-16 rounded-md bg-indigo-300 hover:bg-white hover:text-indigo-500 text-white text-2xl font-extrabold flex items-center justify-center mb-2 md:my-0">
                            <svg className="h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>

                    </div>
                </div></div>
        </Fragment>
    )
}

export default Carousel
