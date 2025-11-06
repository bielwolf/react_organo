import './Campo.css'
import React from 'react'

interface CampoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio: boolean
    type?: string
}

const Campo = ({ aoAlterado, label, obrigatorio, placeholder, valor, type } :CampoProps) => {

    const placeholderModificado = `${placeholder}`

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${type ?? 'text'}`}>
            <label>{label}</label>
            <input 
                type={type ?? 'text'} 
                value={valor} 
                onChange={aoDigitado} 
                required={obrigatorio} 
                placeholder={placeholderModificado}
            /> 
        </div>)
}

export default Campo