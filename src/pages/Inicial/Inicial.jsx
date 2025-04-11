import { FormularioTarefas } from "../../componentes"
import style from "./Inicial.module.css"

const Inicial = () => {
    return (
        <div className={style.Inicial}>
            <h1>Bem-vindo à página inicial!</h1>
            <p>Esta é a página inicial do nosso aplicativo.</p>
            <FormularioTarefas />
        </div>
    )
}

export { Inicial }