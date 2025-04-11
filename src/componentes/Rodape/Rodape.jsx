import style from './Rodape.module.css'; // Importando o CSS do Rodape

const Rodape = (props) => {
    const { children } = props; // Desestruturação para pegar o children do props

    const ano = new Date().getFullYear(); // Obtém o ano atual

    return (
        <div>
            <footer className={style.Rodape}>
            <p>© React - {ano} - Desenvolvido por <a href="https://github.com/Harthuz/">@Harthuz</a> (github)</p>
            </footer>
        </div>
    );
}

export { Rodape }