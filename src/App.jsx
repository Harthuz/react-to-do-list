import './App.css'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { Cabecalho, Conteudo, Rodape } from './componentes/'
import { Inicial } from './pages/'

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      {/* <Router /> */}
      <Cabecalho nomeUsuario="Hernandes" />
      <Conteudo>
        <Inicial />
      </Conteudo>
      <Rodape />
    </BrowserRouter>
  )
}

export { App }
