import { useState } from 'react'
import './App.css'
import { Cabecalho } from './componentes/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello Word</h1>
      <Cabecalho nomeUsuario="Hernandes" />
    </>
  )
}

export { App }
