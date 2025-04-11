import style from './Conteudo.module.css'

const Conteudo = (props) => {
    const { children } = props; // Desestruturação para pegar o children do props

    return (
        <div className={style.Conteudo}>
            {children}
        </div>
    );
}

export { Conteudo }