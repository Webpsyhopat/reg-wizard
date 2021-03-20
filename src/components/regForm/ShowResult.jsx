import { NavLink } from 'react-router-dom'
import s from './RegForm.module.css'

const ShowResult = ({ contacts, address, categories }) => {
    return (
        <div className={s.resultBlock}>
            <h1>Inputed data:</h1>
            <span>
                <h2>Contacts:</h2>
                <p>{contacts.email}</p> 
                <p>{contacts.phone}</p>
                <p>{contacts.password}</p>
            </span>
            <span>
                <h2>Address:</h2>
                <p>{address.country}</p>
                <p>{address.city}</p>
                <p>{address.address}</p>
            </span>
            <span>
                <h2>Categories:</h2>
                <p>{categories[0]}</p>
                <p>{categories[1]}</p>
                <p>{categories[2]}</p>
            </span>
            <NavLink to='/registration/1' className = {s.tryAgainLink}><h1>Try again</h1></NavLink>
        </div>
    )
}

export default ShowResult