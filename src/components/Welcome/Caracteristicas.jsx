import React, { Fragment } from 'react'

const Caracteristicas = () => {
    return (
        <Fragment>
            <div className="w-full md:w-3/5 px-4 mx-auto mt-3">
                <div className="justify-center flex flex-wrap relative">
                    <div className="my-4 w-full lg:w-6/12 px-4">
                        <div className="bg-blue-500 shadow-lg rounded-lg text-center p-8">
                            
                            <svg className="shadow-md rounded-full max-w-full w-16 mx-auto p-2.5 bg-white text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-3.148 0-6 2.553-6 5.702 0 4.682 4.783 5.177 6 12.298 1.217-7.121 6-7.616 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm12 16l-6.707-2.427-5.293 2.427-5.581-2.427-6.419 2.427 4-9 3.96-1.584c.38.516.741 1.08 1.061 1.729l-3.523 1.41-1.725 3.88 2.672-1.01 1.506-2.687-.635 3.044 4.189 1.789.495-2.021.465 2.024 4.15-1.89-.618-3.033 1.572 2.896 2.732.989-1.739-3.978-3.581-1.415c.319-.65.681-1.215 1.062-1.731l4.021 1.588 3.936 9z"/></svg>

                            <p className="text-lg text-white mt-4 font-semibold">Ubicación</p>
                            <ul className="text-base text-white opacity-75 mt-2">
                                <li>Barcelona</li>
                                <li>Madrid</li>
                                <li>Valencia</li>
                                <li>Bilbao</li>
                            </ul>
                        </div>
                        <div className="bg-red-500 shadow-lg rounded-lg text-center p-8 mt-8">
                           <svg className="shadow-md rounded-full max-w-full w-16 mx-auto p-2.5 bg-white text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22.246c-.428 0-1.099-.709-1.688-2.276-.579.295-1.082.527-1.571.738.767 1.992 1.858 3.292 3.259 3.292 1.44 0 2.552-1.371 3.322-3.452-.485-.201-.997-.43-1.581-.719-.599 1.667-1.298 2.417-1.741 2.417zm-4.709-2.216c-3.099 1.139-6.29 1.168-6.29-1.644 0-.939.435-2.257 1.796-4.082.581-.779 1.254-1.545 1.937-2.248 1.531-1.555 3.256-3.05 5.505-4.599-1.083-.596-2.264-1.167-3.416-1.59-1.18-.435-2.219-.676-3.015-.676-.508 0-.886.107-1.009.288-.133.192-.138.784.445 1.843l.21-.013c1.047 0 1.898.866 1.898 1.933 0 1.067-.851 1.931-1.898 1.931-1.048 0-1.897-.864-1.897-1.931 0-.346.089-.67.245-.951-.59-1.04-.802-1.86-.802-2.503 0-1.515 1.154-2.354 2.808-2.354 2.514 0 5.9 1.662 8.082 2.946 2.214-1.363 5.717-3.159 8.304-3.159 1.893 0 2.807 1.054 2.807 2.395 0 .939-.436 2.256-1.796 4.08-3.084 4.137-9.216 8.606-13.914 10.334zm14.917-4.305c.142-.27.22-.576.22-.902 0-1.068-.849-1.933-1.897-1.933s-1.897.865-1.897 1.933c0 1.066.849 1.93 1.897 1.93l.258-.017c.552 1.024.544 1.597.415 1.787-.124.181-.501.287-1.01.287-1.602 0-3.833-.944-5.27-1.657-.48.342-1.075.748-1.657 1.119 1.925 1.036 4.757 2.295 6.927 2.295 1.64 0 2.808-.83 2.808-2.354 0-.638-.211-1.455-.794-2.488zm-12.834.119h-.001l-.013-.01c-1.144-.81-2.272-1.7-3.317-2.631-2.817 2.877-3.611 4.963-3.238 5.524.126.189.492.299 1.003.299 2.35 0 6.08-2.018 8.287-3.465 2.709-1.775 5.8-4.328 7.736-6.926 1.506-2.018 1.552-3.081 1.366-3.361-.126-.19-.491-.298-1.003-.298-1.952 0-4.924 1.459-6.636 2.447 1.263.836 2.443 1.719 3.52 2.616-.408.415-.834.819-1.27 1.211-1.196-.982-2.524-1.946-3.901-2.81-1.581 1.036-3.173 2.254-4.603 3.552 1.075.951 2.356 1.949 3.721 2.873-.522.331-1.049.647-1.651.979zm2.626-5.844c1.104 0 2 .896 2 2s-.896 2-2 2-2-.896-2-2 .896-2 2-2zm-1.739-5.828c-.58-.285-1.095-.518-1.581-.718.77-2.082 1.882-3.454 3.32-3.454 1.403 0 2.495 1.302 3.261 3.292-.49.212-.996.447-1.572.739-.587-1.567-1.258-2.275-1.689-2.275-.441 0-1.139.75-1.739 2.416z"/></svg>
                            <p className="text-lg text-white mt-4 font-semibold">Especialidades</p>
                            <ul className="text-base text-white opacity-75 mt-2">
                                <li>Psicología Forense</li>
                                <li>Guardia y Custodia. Divorcios y Modificación de Medidas</li>
                                <li>Violencia de Genero</li>
                                <li>Coordinador Parental</li>
                                <li>Maltrato a menores</li>
                                <li>Abuso y Agresión Sexual</li> </ul>
                        </div>

                    </div>

                    <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                        <div className="shadow-lg rounded-lg text-center p-8 bg-indigo-500">
                        <svg className="shadow-md rounded-full max-w-full w-16 mx-auto p-2.5 bg-white text-indigo-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.997 18.529c-.372.223-1.044.565-1.997.904v-5.038c-3.979.327-6.323 1.521-7 1.954-.677-.433-3.022-1.627-7-1.954v5.037c-.954-.339-1.625-.681-1.996-.902l-.004-1.944c-.008-2.036.06-2.531 1.863-2.929 2.28-.507 4.616-.775 5.225-2.323.282-.713.117-1.509-.488-2.365-1.588-2.246-2.007-4.36-1.183-5.952.645-1.244 2.018-2.017 3.583-2.017 1.562 0 2.932.766 3.573 1.999.827 1.587.409 3.709-1.175 5.973-.6.857-.762 1.652-.481 2.362.607 1.534 2.929 1.815 5.219 2.323 1.805.398 1.873.898 1.863 2.957l-.002 1.915zm-2.997 2.465c-1.588.287-3.853.925-5.5 1.638v-5.431c1.216-.783 3.666-1.472 5.5-1.707v5.5zm-6.5 1.638c-1.648-.713-3.912-1.351-5.5-1.638v-5.5c1.834.235 4.284.924 5.5 1.707v5.431zm7.851-9.952c-2.865-.632-5.663-.951-4.133-3.134 3.885-5.555.702-9.546-3.218-9.546s-7.12 4.022-3.218 9.546c1.557 2.203-1.328 2.516-4.134 3.134-2.56.566-2.656 1.783-2.648 3.91l.004 2.475s.957.758 2.996 1.431v1.352c.148.022 3.57.457 7 2.131 3.429-1.673 6.866-2.111 7-2.131v-1.352c2.039-.673 2.996-1.431 2.996-1.431l.003-2.451c.01-2.143-.077-3.366-2.648-3.934z"/></svg>
                            <p className="text-lg text-white mt-4 font-semibold">Profesional </p>
                            <ul className="text-base text-white opacity-75 mt-2">
                                <li>Col. nº 15641. Col·legi Oficial de Psicòlegs de Catalunya.</li>
                                <li>Col. nº 00500. Asociación Profesional Colegial de Peritos Judiciales del Reino de España.</li>
                                <li>Col. nº 08023. Registro de Mediadores de la Asociación Española de Mediación.</li>
                            </ul>
                        </div>
                        <div className="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8">
                        <svg className="shadow-md rounded-full max-w-full w-16 mx-auto p-2.5 bg-white text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17.867 3.493l4.133 3.444v5.127l-10 8.333-10-8.334v-5.126l4.133-3.444 5.867 3.911 5.867-3.911zm.133-2.493l-6 4-6-4-6 5v7l12 10 12-10v-7l-6-5z"/></svg>
                            <p className="text-lg text-white mt-4 font-semibold">Respeto</p>
                            <p className="text-base text-white opacity-75 mt-2">Respeto y comprensión a vuestras vivencias e intimidad.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Caracteristicas
