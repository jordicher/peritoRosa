import React from 'react'


const CardRosa = () => {
    return (
        
            <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
                <picture>
                    <source srcSet="/images/RosaCherto.webp" type="image/webp"/>
                    <source srcSet="/images/RosaCherto.png" type="image/png"/>
                      <img className="w-32 h-32 md:w-40 md:h-auto md:rounded-none rounded mx-auto object-cover p-2" src="/images/RosaCherto.png" alt="imagen Rosa"/>
                </picture>
              
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-semibold">
                            “Mi filosofía es facilitar un espacio de confianza, adaptado a los problemas específicos de cada uno los clientes. ”
      </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-cyan-600">
                            Rosa Cherto Matarrodona
      </div>
                        <div className="text-gray-500">
                            Perito Judicial, Barcelona
      </div>
                    </figcaption>
                </div>
            </figure>

    
    )
}

export default CardRosa
