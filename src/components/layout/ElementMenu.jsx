import React from 'react'

const ElementMenu = ({ navbarOpen, setNavbarOpen, nameRuta }) => {
    return (
        <li

         
                className="px-3 py-2 flex items-center text-xs md:text-lg uppercase font-bold leading-snug text-black transform hover:-rotate-12"
                onClick={() => setNavbarOpen(!navbarOpen)}>
                <span className="ml-2">{nameRuta}</span>
         




        </li>
    )
}

export default ElementMenu
