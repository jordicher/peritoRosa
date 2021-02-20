import React from 'react'

const Lista = ({estudio}) => {
    return (
        <li className="py-2">
        <div className="flex items-center justify-center">
            <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-pink-200 mr-3">
                </span>
            </div>
            <div>
                <h4 className="text-gray-600 ">{estudio}</h4>
            </div>
        </div>
    </li>

    )
}

export default Lista
