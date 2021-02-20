import React, { useState } from 'react'
import Opinion from './Opinion'
import { v4 as uuidv4 } from 'uuid'
import Cargando from '../Cargando';

const Opiniones = ({ comentarios }) => {


    const colors = ['red', 'yellow', 'green', 'indigo', 'gray', 'blue'];

    const [comentario, setcomentario] = useState();


    const onChangeComentario = changeComentario => {
        setcomentario(comentariosSelect()[changeComentario].comentario);
    }

    const comentariosSelect = () => {return comentarios.filter(coment => coment.favorito === true)}

    if (comentarios) {
        return (<div className="mt-3">
            <div className="grid grid-cols-3 p-2 bg-blue-100">
                <div className=" flex flex-col mx-2 gap-2 col-span-3 sm:col-span-1 row-start-2 sm:row-start-1">

                    {comentariosSelect().map((opinion, index) => <Opinion key={uuidv4()} comentario={opinion} bgColor={colors[index]}
                        onChangeComentario={onChangeComentario} iden={index}
                    />)}



                </div>

                <div className="col-span-3 sm:col-span-2 rounded p-10 bg-gray-100">


                    <svg className="text-blue-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" /></svg>
                    <p className="text-lg whitespace-pre-wrap">
                        {comentario ? comentario : setcomentario(comentarios[0].comentario) }
                    </p>
                    <svg className="text-blue-300 ml-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z" /></svg>

                </div>

            </div>
        </div>)
    }

    return ( <Cargando/>)
}



export default Opiniones
