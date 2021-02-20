import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Lista from './Lista'

const Listas = ({ formacion, indice }) => {

    const colors = ['blue', 'green', 'yellow'];

    const pathSvg = ["M20 12.875v5.068c0 2.754-5.789 4.057-9 4.057-3.052 0-9-1.392-9-4.057v-6.294l9 4.863 9-3.637zm-8.083-10.875l-12.917 5.75 12 6.5 11-4.417v7.167h2v-8.25l-12.083-6.75zm13.083 20h-4c.578-1 1-2.5 1-4h2c0 1.516.391 2.859 1 4z",
        "M15.517 24h-11.646c.522-3.035.897-6.162-.422-8.028-1.666-2.357-2.43-4.742-2.449-6.883-.045-5.19 4.231-9.114 10.203-9.089 7.236.03 9.328 6.156 9.773 7.943.34 1.369-.898 1.869-.166 2.702.596.679 1.035 1.364 1.789 2.177.292.315.405.646.401.943-.006.434-.291.798-.748.958-.429.15-.76.32-1.215.443-.145 1.16-.521 2.572-.798 3.557-.737 2.62-2.896 1.059-3.881 2.607-.426.668-.64 1.738-.841 2.67zm-3.844-19h-1.346c-.243.681-.312 1.122-.842 1.341-.53.22-.888-.041-1.545-.353l-.952.952c.311.654.573 1.015.353 1.545-.219.53-.66.599-1.341.841v1.347c.68.242 1.122.312 1.341.842.222.534-.047.902-.353 1.544l.952.952c.652-.309 1.015-.573 1.545-.353v.001c.529.219.599.657.842 1.341h1.346c.243-.682.313-1.121.845-1.343h.001c.526-.219.883.042 1.541.354l.952-.952c-.31-.651-.573-1.014-.354-1.544.219-.529.662-.6 1.342-.842v-1.347c-.688-.244-1.123-.313-1.341-.841-.22-.53.041-.89.353-1.545l-.952-.952c-.651.31-1.014.573-1.545.353-.529-.219-.598-.657-.842-1.341zm-.673 6.667c-.92 0-1.667-.747-1.667-1.667 0-.921.747-1.667 1.667-1.667s1.667.746 1.667 1.667c0 .92-.747 1.667-1.667 1.667z",
        "M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"]

    return (

        <div className={`bg-white text-gray-800 text-center border-${colors[indice]}-500 border-2 mt-10 transition duration-500 ease-in-out transform hover:-translate-y-2 rounded-2xl p-2 hover:shadow-2xl`}>
            <div className="flex justify-center">
                <div className={`bg-white rounded-full h-16 w-16 -mt-8 flex items-center justify-center border-2 border-${colors[indice]}-500`}>
                    <svg className={`text-${colors[indice]}-800`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d={pathSvg[indice]} /></svg>
                </div>
            </div>
            <div className="">
                <h1 className={`text-2xl text-${colors[indice]}-500 font-bold`}>
                    {formacion.nombre}
                </h1>
                <ul className="list-none mt-1">
                    {formacion.estudios.map(estudio => <Lista key={uuidv4()} estudio={estudio} />
                    )}

                </ul>

              {/*   <svg className="w-10 ml-auto animate-bounce" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <a href="https://www.aspejure.com/perito-judicial/500/cherto-matarrodona-rosa" target="_blank" rel="noreferrer">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </a>
                </svg> */}
            </div>

        </div>


    )
}

export default Listas
