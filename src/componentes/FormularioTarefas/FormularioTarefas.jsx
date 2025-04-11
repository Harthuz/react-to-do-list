import { Botao } from "../Botao"
import { CampoTexto } from "../CampoTexto"

const FormularioTarefas = () => {
    return (
        <form action="">
            <CampoTexto />
            <Botao texto="Adicionar tarefa" tipo="primario" ></Botao>
        </form>
    )
}

export { FormularioTarefas }