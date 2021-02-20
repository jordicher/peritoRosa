import React from 'react'

const Opinion = ({ comentario, bgColor, onChangeComentario, iden }) => {

    return (


        <div className={`grid grid-cols-3 bg-${bgColor}-200 rounded slide-left ml-10 items-center`} onClick={()=>onChangeComentario(iden)} onMouseOver={()=>onChangeComentario(iden)}>
            <div className="relative">

            {
                    comentario.img === ''
                        ? <svg className="col-span-1 object-cover rounded-full h-20 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        :  
                        <picture>
                            <source srcSet={`/images/opiniones/${comentario.img}.webp`} type="image/webp" />
                            <source srcSet={`/images/opiniones/${comentario.img}.png`} type="image/png" />
                            <img className="col-span-1 object-cover rounded-full h-20 mx-auto" src={`/images/opiniones/${comentario.img}.png`} alt="Imagen Usuario" />
                        </picture>
                        
                }
                          

            </div>
            <div className="col-span-2 my-auto p-5">
                <p className="text-2xl uppercase font-bold">{comentario.nombre}</p>
                <p>{comentario.ubicacion}</p>
            </div>
        </div>


    )
}

export default Opinion
