import s from './RegForm.module.css'

const SuccessfullEnd = () => {
    return (
        <div className={s.SuccessfullEndedForm}>
            <h1>Success!</h1>
            <p>Your account was successfully registered.</p>
            <p>Please wait for account approval.</p>
            <p>It can take up to 24 hours.</p>
            <span>Have questions? <br />
                Contact info@site.com
            </span>
        </div>
    )
}

export default SuccessfullEnd