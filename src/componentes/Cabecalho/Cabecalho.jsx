import style from './Cabecalho.module.css'

import { Link } from 'react-router-dom'

const Cabecalho = () => {   
    return (
        <div className={style.Cabecalho}>
            <Link to="/">
            <span>ToDo </span>
            List            
            </Link>

            {/* <Link to="/sobre-nos">
                <span>Sobre Nós</span>
            </Link> */}
        </div>
    )
}

export { Cabecalho }