import style from './Cabecalho.module.css'

import { Link } from 'react-router-dom'

const Cabecalho = () => {   
    return (
        <div className={style.Cabecalho}>
            <Link to="/inicial">
            <span>ToDo</span>
            <span className={style.List}>List</span>            
            </Link>

            <Link to="/sobre-nos">
                <span className={style.Sobre}>Sobre Nós</span>
            </Link>
        </div>
    )
}

export { Cabecalho }