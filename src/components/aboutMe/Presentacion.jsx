import React from 'react'


const Presentacion = () => {


    return (
        <div className="container mx-auto px-4">
            <div className="items-center grid grid-cols-2">

                <div className="w-full px-4 col-span-2 sm:col-span-1">
                    <picture>
                        <source srcSet="/images/RosaCherto.webp" type="image/webp" />
                        <source srcSet="/images/RosaCherto.png" type="image/png" />
                        <img alt="Imagen Personal" className="max-w-full mx-auto rounded-lg shadow-lg" src="/images/RosaCherto.png" />
                    </picture>
                </div>

                <div className="w-full ml-auto mr-auto px-4 col-span-2 sm:col-span-1">
                    <div className="md:pr-12 text-center">

                        <div className="p-3 inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                            <svg className="text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20.823 19.307c-2.967-.681-6.578-2.437-5.514-4.723.684 1.125 2.8 1.777 4.449.804-4.747-1.204 2.334-9.471-3.871-14.105-1.134-.853-2.526-1.283-3.911-1.283-1.379 0-2.752.425-3.863 1.283-6.206 4.634.876 12.901-3.872 14.105 1.652.974 3.771.292 4.451-.804 1.064 2.287-2.551 4.043-5.514 4.723-2.979.683-3.178 2.468-3.178 4.004l.005.689h1.996c0-1.96-.032-2.364 1.625-2.744 1.633-.375 5.568-1.53 6.855-4.162 1.011-2.067-.02-3.45-1.528-6.722-.133 1.109-1.001 1.613-1.001 1.613-.049-.692-.15-1.366-.241-1.967-.486-3.225-.638-5.463 1.623-7.152 1.498-1.156 3.787-1.159 5.357.019 2.236 1.67 2.084 3.909 1.598 7.133-.089.591-.188 1.253-.238 1.933 0 0-.831-.404-.975-1.604-1.535 3.296-2.573 4.669-1.556 6.747 1.286 2.632 5.223 3.788 6.855 4.162 1.67.384 1.625.8 1.625 2.744h1.994l.005-.693c.001-1.536-.199-3.318-3.176-4z" /></svg>
                        </div>

                        <h3 className="text-3xl font-semibold">Licenciada en Psicología</h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">Especialidad en Psicología Clínica, campo que me apasiona y en el que desarrollo mi trayectoria profesional.</p>

                    </div>
                </div>
            </div>







        </div>
    )
}

export default Presentacion
