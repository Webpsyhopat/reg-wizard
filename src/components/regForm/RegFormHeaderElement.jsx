import { NavLink } from 'react-router-dom'
import s from './RegForm.module.css'

const RegFormHeaderElement = ({ step, id, title }) => {

    step = Number(step)
    id = Number(id)
    const path = '/registration/' + id

    if (step === 4) {
        return <li><span className={s.RegFormHeaderCurrentLink}>{title}</span></li>
    }

    return (<li>
        {(step > id)
            ? <NavLink to={path} className={s.RegFormHeaderLink}>{title}</NavLink>
            : (step === id)
                ? <span className={s.RegFormHeaderCurrentLink}>{title}</span>
                : <span>{title}</span>}
    </li>
    )
}

export default RegFormHeaderElement