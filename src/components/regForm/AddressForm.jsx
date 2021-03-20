import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import s from './RegForm.module.css'

const AddressForm = ({ state, ...props }) => {

    const addressValidation = yup.object().shape({
        country: yup.string().required('Required field'),
        city: yup.string().required('Required field'),
        address: yup.string().required('Required field'),
    })

    return (
        <div className={s.formBody}>
            <Formik
                initialValues={{
                    country: state.country,
                    city: state.city,
                    address: state.address
                }}
                validationSchema={addressValidation}
                onSubmit={(values, actions) => {
                    props.onSubmit(values);
                    actions.setSubmitting(false);
                    actions.resetForm({
                        values: {
                            country: state.country,
                            city: state.city,
                            address: state.address
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

                        <label>Country</label>
                        <Field type='text' name="country" className={s.formBodyInput} value={values.country} />
                        {errors.country && touched.country && <div className={s.error}>{errors.country}</div>}

                        <label>City</label>
                        <Field type='text' name="city" className={s.formBodyInput} value={values.city} />
                        {errors.city && touched.city && <div className={s.error}>{errors.city}</div>}

                        <label>Address</label>
                        <Field
                            type='text' name="address" className={s.formBodyInput} value={values.address}
                        />
                        {(errors.address && touched.address)
                            ? <div className={s.error}>{errors.address}</div>
                            : ''}

                        <button type="submit" className={s.formBtn}
                            disabled={isSubmitting || errors.country || errors.city || errors.address}>
                            Next
                    </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddressForm