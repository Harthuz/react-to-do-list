import { useState } from 'react'
import './App.css'
import { Cabecalho, Conteudo } from './componentes/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho nomeUsuario="Hernandes" />
      <Conteudo />
    </>
  )
}

export { App }
