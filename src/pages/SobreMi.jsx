import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Presentacion from '../components/aboutMe/Presentacion'
import Listas from '../components/aboutMe/Listas'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const SobreMi = () => {
   
    const formaciones = [{
        nombre: 'Formación Académica',
        estudios: [
            'MÁSTER EN PSICOLOGÍA FORENSE',
            'ESPECIALISTA EN COORDINACIÓN PARENTAL Y GESTIÓN DEL CONFLICTO FAMILIAR',
            'MÁSTER EN GRAFOLOGÍA CIENTÍFICA',
            'MÁSTER EN MALOS TRATOS Y LA VIOLENCIA DE GÉNERO'
        ]
    }, {
        nombre: 'Especialidades Periciales',
        estudios: [
            'Violencia de Género - Maltrato Doméstico',
            'Violencia de Género - Maltrato Infantil',
            'Psicología Clínica',
            'Diagnóstica de Capacitación o Incapacitación',
            'Diagnóstico de Idoneidad en Capacitación Parental',
            'Diagnóstico de Veracidad de Testimonios',
            'Coordinación de Parentalidad',
            'Psicología Forense',
            'Victimología',
            'Grafopsicología',
            'Estudio del Perfil Criminalístico del Delincuente',
            'Psicología Criminalística Forense'
        ]
    }, {
        nombre: 'Formación Complementaria',
        estudios: [
            'Abusos a Menores: Físicos, Emocionales, Sociales y Sexuales.',
            'Máster en Mediación Familiar',
            'Psicología de la Violencia',
            'Agresores Sexuales. Entre la Psicopatía y la Criminalidad Violenta',
            'Violencia de Género, y los Vínculos y Consecuencias entre Maltratadores y Maltratadas',
            'Las Violencias en la Familia'
        ]
    }]
    return (
        <div className="bg-gray-50">

            <Header color="bg-indigo-100"/>
            <br/>
            <Presentacion />

            <div className="container mx-auto grid grid-rows gap-4 my-5">

                {formaciones.map((formacion, indice) => <Listas key={uuidv4()} formacion={formacion} indice={indice}/>)}

            </div>

            <Footer/>
        </div>
    )
}

export default SobreMi
