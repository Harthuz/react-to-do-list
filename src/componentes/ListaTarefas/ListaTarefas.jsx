import { ItemListaTarefas } from "../../componentes"
import style from "./ListaTarefas.module.css"

const ListaTarefas = () => {
    return (
        <ul className={style.ListaTarefas}>
        <ItemListaTarefas nome="Tarefa 1" />
        <ItemListaTarefas nome="Tarefa 2" />
        <ItemListaTarefas nome="Tarefa 3" />
        </ul>
    )
}

export { ListaTarefas }