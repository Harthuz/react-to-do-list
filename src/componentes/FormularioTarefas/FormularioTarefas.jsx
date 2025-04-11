import { Botao } from "../Botao"
import { CampoTexto } from "../CampoTexto"
import style from "./FormularioTarefas.module.css"

const FormularioTarefas = () => {
    return (
        <form action="" className={style.FormularioTarefas}>
            <CampoTexto />
            <Botao texto="+" tipo="primario" ></Botao>
        </form>
    )
}

export { FormularioTarefas }