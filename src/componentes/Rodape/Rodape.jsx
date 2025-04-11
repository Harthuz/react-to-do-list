import style from './Rodape.module.css'; // Importando o CSS do Rodape

const Rodape = (props) => {
    const { children } = props; // Desestruturação para pegar o children do props

    return (
        <div>
            <footer className={style.Rodape}>
                {children} {/* Renderiza o conteúdo passado como filho */}
            </footer>
        </div>
    );
}

export { Rodape }