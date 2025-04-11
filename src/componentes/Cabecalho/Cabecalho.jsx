const Cabecalho = (props) => {
    const {
        nomeUsuario
    } = props
    
    return (
        <div>
            Olá {nomeUsuario}!
            <br />
        </div>
    )
}

export { Cabecalho }