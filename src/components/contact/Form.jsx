import React from 'react'

import { useForm } from 'react-hook-form'
import axios from 'axios';


import { ToastContainer, toast } from 'react-toastify'


const Form = () => {

    const { register, errors, handleSubmit } = useForm();

    const submitForm = (e) => {
        console.log(e)
        axios({
            method: "post",
            url: 'https://formspree.io/f/mzbkwbln',
            data: e
        }).then(function (response) {
            console.log(response);         
            toast('Se ha enviado el correo!', {
                type: 'success',
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
            .catch(function () {
                toast('Error!, no se ha podido enviar', {
                    type: 'error',
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    }



    return (
        <form
            className="space-y-6"
            onSubmit={handleSubmit(submitForm)}>

            <div className="md:inline-flex space-y-4 md:space-y-0  w-full p-4 items-center">
                <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                    <div>

                        <label className="text-sm">Email*</label>
                        <div className="w-full inline-flex border">
                            <div className="pt-2 w-1/12 bg-gray-100 bg-opacity-50">
                                <svg
                                    fill="none"
                                    className="w-6 mx-auto"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <input
                                name="emailForm"
                                type="email"
                                className={errors.emailForm ? "border-red-500 border-2 w-11/12 p-2" : "w-11/12 p-2"}
                                placeholder="email@example.com"

                                ref={
                                    register({
                                        required: {
                                            value: true
                                        }
                                    }
                                    )
                                } />

                        </div>


                        <label className="text-sm ">Nombre*</label>
                        <div className="w-full inline-flex border">
                            <div className="w-1/12 pt-2 bg-gray-100">
                                <svg
                                    fill="none"
                                    className="w-6  mx-auto"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                            </div>
                            <input
                                name="nameForm"
                                type="text"
                                className={errors.nameForm ? "border-red-500 border-2 w-11/12 p-2" : "w-11/12 p-2"}
                                placeholder="Lucas Sanchez"

                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            minLength: 2,
                                            maxLength: 80,
                                        }
                                    }
                                    )
                                } />
                        </div>

                    </div>
                    <div>
                        <label className="text-sm ">Núm. Teléfono*</label>
                        <div className="w-full inline-flex border">
                            <div className="pt-2 w-1/12 bg-gray-100">
                                <svg
                                    fill="none"
                                    className="w-6  mx-auto"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <input
                                name="telForm"
                                type="tel"
                                className={errors.telForm ? "border-red-500 border-2 w-11/12 p-2" : "w-11/12 p-2"}
                                placeholder="649487065"
                                ref={
                                    register({
                                        required: {
                                            value: true,
                                            maxLength: 14, minLength: 8
                                        }
                                    }
                                    )
                                } />
                        </div>
                    </div>
                    <span className="text-sm">*Campos obligatorios</span>
                </div>

            </div>

            <hr />

            <div className="md:inline-flex  space-y-4 md:space-y-0  w-full p-4 text-gray-700 items-center">
                <div className="md:w-2/3 mx-auto max-w-sm space-y-5">
                    <div>

                        <label className="text-sm ">Breve descripción</label>
                        <div className="inline-flex border">
                            <div className="w-1/12 pt-2 bg-gray-100">
                                <textarea name="descripcion" cols="35" rows="5" ref={register}></textarea>
                            </div>

                        </div>
                    </div>
                    <div>
                        <label className="text-sm ">Fecha Juicio (si la hay)</label>
                        <div className="w-full inline-flex border">
                            <div className="pt-2 w-1/12 bg-gray-100">
                                <svg
                                    fill="none"
                                    className="w-6  mx-auto"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"

                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                    />
                                </svg>
                            </div>
                            <input
                                name="dateForm"
                                type="date"
                                className="w-11/12 p-2"
                                ref={register}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="w-full p-4">
                <button className="w-full inline-flex items-center justify-center bg-green-300 hover:bg-green-100 hover:text-green-600 p-3 rounded text-white text-2xl font-bold">
                    <svg
                        fill="none"
                        className="w-4 mr-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                        />
                    </svg>
                      Enviar
                    </button>
            </div>
            <ToastContainer />
        </form>



    )
}

export default Form
