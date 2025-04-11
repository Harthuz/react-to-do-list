import { Botao } from "../Botao"
import { CampoTexto } from "../CampoTexto"

const FormularioTarefas = () => {
    return (
        <form action="">
            <CampoTexto />
            <Botao texto="Adicionar tarefa"></Botao>
        </form>
    )
}

export { FormularioTarefas }