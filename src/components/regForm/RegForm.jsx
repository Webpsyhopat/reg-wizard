import { useState, useEffect } from 'react'
import { useHistory, Route, withRouter } from 'react-router-dom'
import s from './RegForm.module.css'
import RegFormHeader from './RegFormHeader'
import ContactsForm from './ContactsForm'
import AddressForm from './AddressForm'
import CategoriesForm from './CategoriesForm'
import SuccessfullEnd from './SuccessfullEnd'
import ShowResult from './ShowResult'

const RegForm = (props) => {

    const history = useHistory()
    const [localState, setLocalState] = useState({
        step: props.match.params.step,
        contacts: { email: '', phone: '', password: '', passwordConfirm: '' },
        address: { country: '', city: '', address: '' },
        categories: [0, 0, 0,]
    })

    useEffect(() => {
        if (props.match.params.step !== localState.step) {
            history.push(`/registration/${localState.step}`)
        }
    }, [localState.step])

    const contactsSubmit = (values) => {
        setLocalState({ ...localState, step: '2', contacts: { ...values } })
    }

    const addressSubmit = (values) => {
        setLocalState({ ...localState, step: '3', address: { ...values } })
    }

    const categoriesSubmit = (values) => {
        setLocalState({ ...localState, step: '4', categories: [...Object.values(values)] })
    }

    return (
        <>
            <div className={s.formWrapper}>
                <RegFormHeader step={localState.step} />
                <div>
                    <Route exact path='/registration/1'><ContactsForm state={localState.contacts}
                        onSubmit={contactsSubmit} /></Route>
                    <Route exact path='/registration/2'><AddressForm state={localState.address}
                        onSubmit={addressSubmit} /></Route>
                    <Route exact path='/registration/3'><CategoriesForm state={localState.categories}
                        onSubmit={categoriesSubmit} /></Route>
                    <Route exact path='/registration/4'><SuccessfullEnd /></Route>
                </div>
            </div>
            <Route exact path='/registration/4'><ShowResult {...localState} /></Route>
        </>
    )
}

export default withRouter(RegForm)