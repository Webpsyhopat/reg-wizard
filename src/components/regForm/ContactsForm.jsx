import s from './RegForm.module.css'
import * as yup from 'yup';
import { Field, Form, Formik } from 'formik';

const ContactsForm = ({ state, ...props }) => {

    const phoneRegExp = /^((\+?3)?8)?0\d{9}$/

    const contactsValidation = yup.object().shape({
        email: yup.string().required('Required field').email('Wrong email'),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        password: yup.string().required('Password is required'),
        passwordConfirm: yup.string().oneOf([yup.ref('password'), null],
            "Passwords don't match").required('Confirm Password is required')
    })

    return (
        <div className={s.formBody}>
            <Formik
                initialValues={{
                    email: state.email,
                    phone: state.phone,
                    password: state.password,
                    passwordConfirm: state.passwordConfirm
                }}
                validationSchema={contactsValidation}
                onSubmit={(values, actions) => {
                    props.onSubmit(values);
                    actions.setSubmitting(false);
                    actions.resetForm({
                        values: {
                            email: state.email,
                            phone: state.phone,
                            password: state.password,
                            passwordConfirm: state.passwordConfirm
                        }
                    });
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <Form onSubmit={handleSubmit}>

                        <label>Email</label>
                        <Field type='email' name="email" className={s.formBodyInput} value={values.email} />
                        {errors.email && touched.email && <div className={s.error}>{errors.email}</div>}

                        <label>Phone</label>
                        <Field type='text' name="phone" className={s.formBodyInput} value={values.phone} />
                        {errors.phone && touched.phone && <div className={s.error}>{errors.phone}</div>}

                        <label>Password</label>
                        <Field
                            type='password' name="password" className={s.formBodyInput} value={values.password}
                        />
                        {(errors.password && touched.password)
                            ? <div className={s.error}>{errors.password}</div>
                            : ''}

                        <label>Password confirm</label>
                        <Field
                            type='password' name="passwordConfirm" className={s.formBodyInput} value={values.passwordConfirm}
                        />
                        {(errors.passwordConfirm && touched.passwordConfirm)
                            ? <div className={s.error}>{errors.passwordConfirm}</div>
                            : ''}

                        <button type="submit" className={s.formBtn}
                            disabled={isSubmitting || errors.email || errors.password || errors.phone}>
                            Next
                    </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default ContactsForm