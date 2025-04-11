import { useState } from 'react'
import './App.css'
import { Cabecalho, Conteudo, Rodape } from './componentes/'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho nomeUsuario="Hernandes" />
      <Conteudo>
        <h1>Conteúdo</h1>
        <p>Olá, mundo!</p>
      </Conteudo>
      <Rodape>
        <p>© 2025 - Todos os direitos reservados.</p>
      </Rodape>
      
    </>
  )
}

export { App }
