import style from './Botao.module.css'
import { TIPO_BOTAO } from './constantes'

const Botao = (props) => {
    const { texto, tipo = TIPO_BOTAO.PRIMARIO} = props
    return (
        <button className={style.Botao} tipo={tipo}>
            {texto}
        </button>
    )
}

export { Botao }