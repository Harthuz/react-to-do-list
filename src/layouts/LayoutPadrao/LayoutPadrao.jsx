import { Cabecalho, Conteudo, Rodape } from "../../componentes"
import { Outlet } from "react-router-dom"

const LayoutPadrao = () => {
    return (
        <>
            <Cabecalho nomeUsuario="Hernandes" />
            <Conteudo>
                <Outlet />
            </Conteudo>
            <Rodape />
        </>

    )
}

export { LayoutPadrao }