import React, { Fragment } from 'react'
import Form from '../components/contact/Form'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Carousel from '../components/contact/Carousel'
import Cargando from '../components/Cargando'

const Contacto = ({ comentarios }) => {
    return (
        <Fragment>
            <Header color="bg-gradient-to-r from-purple-100 to-indigo-200" />

            <div className="container mx-auto mt-5">

                <h1 className="text-5xl font-extrabold font-mono text-center">CÓMO CONTACTAR CONMIGO</h1>
                <h3 className="text-3xl text-center my-2">
                    Quiero escucharte
                </h3>
                <div className="grid grid-cols-2 gap-3 bg-gray-100 bg-opacity-50 rounded">

                    <div className="col-span-2 lg:col-span-1 p-5 ">
                        <div className="space-y-6">

                            <p className="text-2xl">Si quieres información sobre mi trabajo, sin ningún tipo de compromiso </p>
                            <p className="text-2xl"> Puedes contactar conmigo por teléfono, email o a través del formulario de contacto</p>
                            <p className="text-lg font-mono">Muchas gracias</p>

                            <hr className="border-solid border-1 border-gray-300" />

                            <a className="text-gray-800 hover:text-blue-400 font-semibold block p-2 text-xl" href="tel:+34649487065">
                                <svg className="h-7 inline text-blue-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.5 2c.276 0 .5.224.5.5v19c0 .276-.224.5-.5.5h-11c-.276 0-.5-.224-.5-.5v-19c0-.276.224-.5.5-.5h11zm2.5 0c0-1.104-.896-2-2-2h-12c-1.104 0-2 .896-2 2v20c0 1.104.896 2 2 2h12c1.104 0 2-.896 2-2v-20zm-9.5 1h3c.276 0 .5.224.5.501 0 .275-.224.499-.5.499h-3c-.275 0-.5-.224-.5-.499 0-.277.225-.501.5-.501zm1.5 18c-.553 0-1-.448-1-1s.447-1 1-1c.552 0 .999.448.999 1s-.447 1-.999 1zm5-3h-10v-13h10v13z" />
                                </svg> 649 48 70 65
                                </a>

                            <a className="text-gray-800 hover:text-green-600 font-semibold block p-2 text-xl" href="tel:+34649487065">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 inline text-green-700" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg> 649 48 70 65</a>
                            <hr className="border-solid border-1 border-gray-300" />
                            <a className="text-gray-800 hover:text-gray-900 font-semibold block p-2 text-xl" href="mailto:rosacherto@peritojudicial.pro">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 inline" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" /></svg> rosacherto@peritojudicial.pro</a>
                            <hr className="border-solid border-1 border-gray-300" />
                            <p className="text-gray-800 hover:text-gray-900 font-semibold block p-2 text-xl">
                                <svg className="h-6 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21 22h2v2h-22v-2h2v-22h18v22zm-10-3h-2v4h2v-4zm4 0h-2v4h2v-4zm4-17h-14v20h2v-5h10v5h2v-20zm-12 11h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8-3h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8-3h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8-3h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z" /></svg>Calle Rodés núm. 43. Despacho 2. 08901- L´Hospitalet de Llobregat.</p>
                            <hr className="border-solid border-1 border-gray-300" />
                            <iframe title="ubicacion despacho" className="w-full rounded border-2 border-gray-600" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.5136033075332!2d2.104686615818083!3d41.362924779266486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a498e0149f05bb%3A0xdd2197ffd5a762e!2sCarrer%20de%20Rod%C3%A9s%2C%2043%2C%2008901%20L&#39;Hospitalet%20de%20Llobregat%2C%20Barcelona!5e0!3m2!1sca!2ses!4v1611850668857!5m2!1sca!2ses" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                            <p>(A 10 minutos de la Ciutat de la Justicia de Barcelona y Hospitalet de LLobregat).</p>
                        </div>
                    </div>

                    <div className="col-span-2 lg:col-span-1 p-5">
                        <Form />
                    </div>
                </div>
            </div>
            {comentarios ? <Carousel comentarios={comentarios} /> : <Cargando />  }
          


            <Footer />
        </Fragment>
    )
}

export default Contacto
