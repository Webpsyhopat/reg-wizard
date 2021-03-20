import s from './RegForm.module.css'
import RegFormHeaderElement from './RegFormHeaderElement'

const RegFormHeader = ({ step, ...props }) => {

    return (
        <div className={s.formNavHeader}>
            <ul className={s.formNavHeaderUl}>
                <RegFormHeaderElement step={step} id='1' title='contacts' />
                <RegFormHeaderElement step={step} id='2' title='address' />
                <RegFormHeaderElement step={step} id='3' title='categories' />
                <RegFormHeaderElement step={step} id='4' title='success' />
            </ul>
        </div>
    )
}

export default RegFormHeader