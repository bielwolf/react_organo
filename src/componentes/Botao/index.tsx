import type { ReactElement } from 'react'
import './Botao.css'
import React from 'react'


interface BotaoProps {
  texto: ReactElement
}

const Botao = ({ texto }: BotaoProps) => {
  return (
    <button className="botao">
      {texto}
    </button>
  )
}

export default Botao;
