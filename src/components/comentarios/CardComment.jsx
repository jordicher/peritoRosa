import React from 'react'
import ShowMoreText from 'react-show-more-text';

const CardComment = ({ comment }) => {
    const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink', 'gray', 'royalblue', 'flamingo', 'cerise', 'scarlet', 'mango', 'orange', 'sunglow', 'limegreen', 'cerulean'];

    const randomColor = () => {
        return Math.floor(Math.random() * colors.length)
    }

    const color = colors[randomColor()];

    return (
        <div className={`rounded flex-none sm:flex gap-3 items-center bg-${color}-50`}>

            <div className={`flex-none text-center space-y-4 w-40 bg-${color}-200 p-2 rounded mx-auto sm:mx-0`}>
                <p className="text-2xl font-bold">{comment.nombre}</p>

                {
                    comment.img === ''
                        ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        : <picture>
                            <source srcSet={`/images/opiniones/${comment.img}.webp`} type="image/webp" />
                            <source srcSet={`/images/opiniones/${comment.img}.png`} type="image/png" />
                            <img className="rounded-full " src={`/images/opiniones/${comment.img}.png`} alt="logo" />
                        </picture>
                }

                <p className="text-xl">{comment.ubicacion}</p>

            </div>
            <div className="h-full p-2">
                <ShowMoreText
                    lines={3}
                    more=' Ver más...'
                    less=' Ver menos...'
                    className='text-xl whitespace-pre-wrap'
                    anchorClass='font-bold text-right text-yellow-600 hover:text-yellow-900'
                    expanded={false}


                >{comment.comentario}</ShowMoreText>
            </div>




        </div>
    )
}

export default CardComment
