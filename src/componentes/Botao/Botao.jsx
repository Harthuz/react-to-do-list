import style from './Botao.module.css'

const Botao = (props) => {
    const { texto, tipo = "primario"} = props
    return (
        <button className={style.Botao} tipo={tipo}>
            {texto}
        </button>
    )
}

export { Botao }