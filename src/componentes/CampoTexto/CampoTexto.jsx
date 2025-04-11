import style from './CampoTexto.module.css'

const CampoTexto = (props) => {
    return (
        <div className={style.CampoTexto} {...props}>
            <input type="text"/>
        </div>
    )
}

export { CampoTexto }