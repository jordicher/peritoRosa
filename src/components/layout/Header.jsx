import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

import Typical from 'react-typical'
import ElementMenu from './ElementMenu';


const Header = React.memo(({ color }) => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);



    return (
        <Fragment>

            <header className={`relative grid grid-cols-3 pt-2 ${color}`}>


                <Link to="/">
                    <div className=" md:mx-5 text-3xl font-mono uppercase">


                        <h1>Ros<span className="text-green-300 font-bold">a</span> <br /> Chert<span className="text-green-300 font-bold">ó</span> <br /> Matarrodona</h1>

                        <p>
                            <Typical
                                className="hidden lg:block"
                                steps={['Perito Judicial', 6000, 'Psicologa', 3000]}
                                wrapper="em"
                                loop={Infinity}
                            />
                        </p>


                    </div>
                </Link>

                <nav className="flex items-center col-span-2 ">
                    <div className="w-full relative flex justify-end lg:w-auto lg:static lg:block lg:justify-start items-center">
                        <button
                            className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                    </div>

                    <div
                        className={
                            "lg:flex h-full items-center w-full " +
                            (navbarOpen ? "flex" : " hidden")
                        }
                    >
                        <ul className="flex flex-col lg:flex-row list-none mx-auto">

                            <Link to="/">
                                <ElementMenu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} ruta="/" nameRuta="Inicio" />
                            </Link>

                            <Link to="/sobremi">
                                <ElementMenu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} ruta="/sobremi" nameRuta="Sobre Mi" />
                            </Link>

                            <Link to="/comentarios">
                                <ElementMenu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} ruta="/comentarios" nameRuta="Comentarios" />
                            </Link>

                            <Link to="/contacto">
                                <ElementMenu navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} ruta="/contacto" nameRuta="Contacto" />
                            </Link>

                        </ul>
                    </div>

                </nav>

            </header>

        </Fragment >
    )
})

export default Header
