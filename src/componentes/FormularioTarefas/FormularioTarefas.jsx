import { Botao } from "../Botao"
import { CampoTexto } from "../CampoTexto"
import style from "./FormularioTarefas.module.css"
import { TIPO_BOTAO } from "../Botao/constantes"

const FormularioTarefas = () => {
    return (
        <form action="" className={style.FormularioTarefas}>
            <CampoTexto />
            <Botao texto="+" tipo={TIPO_BOTAO.PRIMARIO} ></Botao>
        </form>
    )
}

export { FormularioTarefas }