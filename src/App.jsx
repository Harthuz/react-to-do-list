import { useState } from 'react'
import './App.css'
import { Cabecalho, Conteudo, Rodape } from './componentes/'
import { Inicial } from './pages/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho nomeUsuario="Hernandes" />
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape />
      
    </>
  )
}

export { App }
