import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';
import s from './RegForm.module.css'

const CategoriesForm = ({ state, ...props }) => {

    const contactsValidation = yup.object().shape({
        cat1: yup.number().min(1, 'Please select category'),
        cat2: yup.number().min(1, 'Please select category'),
        cat3: yup.number().min(1, 'Please select category')
    })

    return (
        <div className={s.formBody}>
            <Formik
                initialValues={{
                    cat1: state[0],
                    cat2: state[1],
                    cat3: state[2]
                }}
                validationSchema={contactsValidation}
                onSubmit={(values, actions) => {
                    props.onSubmit(values);
                    actions.setSubmitting(false);
                    actions.resetForm({
                        values: {
                            cat1: state[0],
                            cat2: state[1],
                            cat3: state[2]
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
                        <label>Category 1</label>
                        <Field name="cat1" as="select" className={s.formBodyInput}>
                            <option value="0">Select first category</option>
                            <option value="1">Category 1.1</option>
                            <option value="2">Category 1.2</option>
                            <option value="3">Category 1.3</option>
                            <option value="4">Category 1.4</option>
                            <option value="5">Category 1.5</option>
                        </Field>
                        {errors.cat1 && touched.cat1 && <div className={s.error}>{errors.cat1}</div>}

                        <label>Category 2</label>
                        <Field name="cat2" as="select" className={s.formBodyInput}>
                            <option value="0">Select second category</option>
                            <option value="1">Category 2.1</option>
                            <option value="2">Category 2.2</option>
                            <option value="3">Category 2.3</option>
                            <option value="4">Category 2.4</option>
                            <option value="5">Category 2.5</option>
                        </Field>
                        {errors.cat2 && touched.cat2 && <div className={s.error}>{errors.cat2}</div>}

                        <label>Category 3</label>
                        <Field name="cat3" as="select" className={s.formBodyInput}>
                            <option value="0">Select third category</option>
                            <option value="1">Category 3.1</option>
                            <option value="2">Category 3.2</option>
                            <option value="3">Category 3.3</option>
                            <option value="4">Category 3.4</option>
                            <option value="5">Category 3.5</option>
                        </Field>
                        {errors.cat3 && touched.cat3 && <div className={s.error}>{errors.cat3}</div>}

                        <button type="submit" className={s.formBtn}
                            disabled={isSubmitting || errors.cat1 || errors.cat2 || errors.cat3}>
                            Next
                    </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default CategoriesForm