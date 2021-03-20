import { NavLink } from 'react-router-dom'
import s from './RegForm.module.css'

const ShowResult = ({ contacts, address, categories, refresh }) => {
    return (
        <div className={s.resultBlock}>
            <h2>Inputed data:</h2>
            <span>
                <h3>Contacts:</h3>
                <p>Email: {contacts.email}</p>
                <p>Phone: {contacts.phone}</p>
                <p>Password: {contacts.password}</p>
            </span>
            <span>
                <h3>Address:</h3>
                <p>Country: {address.country}</p>
                <p>City: {address.city}</p>
                <p>Address: {address.address}</p>
            </span>
            <span>
                <h3>Categories:</h3>
                <p>Category 1 {categories[0]}</p>
                <p>Category 2 {categories[1]}</p>
                <p>Category 3 {categories[2]}</p>
            </span>
            <div className={s.tryAgainLink} onClick={refresh}>Try again</div>
        </div>
    )
}

export default ShowResult