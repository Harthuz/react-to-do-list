import { Botao } from "../../../componentes"
import { TIPO_BOTAO } from "../../../componentes"

import style from "./ItemListaTarefas.module.css"

const ItemListaTarefas = (props) => {
    const { nome = "Tarefas" } = props;
    return (
        <li className={style.ItemListaTarefas}>
            { nome }
            <Botao texto="-" tipo={TIPO_BOTAO.SECUNDARIO} />
        </li>
    )
    
}

export { ItemListaTarefas }