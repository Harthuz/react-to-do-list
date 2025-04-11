import style from './Botao.module.css'

const Botao = (props) => {
    const { texto } = props
    return (
        <button className={style.Botao}>
            {texto}
        </button>
    )
}

export { Botao }