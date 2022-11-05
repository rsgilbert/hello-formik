import { Formik } from 'formik'
import React from 'react'


export const BasicForm = () => {
    return (
        <div>
            <h1>Anyway</h1>
            <Formik
                initialValues={{
                    email: 'ag@mail.com',
                    password: 'xxj'
                }}
                validate={values => {
                    const errors = {}
                    if (!values.email) {
                        errors.email = 'Required'
                    }
                    if(values.password.length < 4) {
                        errors.password = 'Password is too short'
                    }
                    return errors
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                    }, 3000);
                }}
            >
                {MyInnerForm}
            </Formik>
        </div>
    )
}


const MyInnerForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='email'
                name='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <input
                type='password'
                name='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
            />
            {errors.password && touched.password && errors.password}
            <button type='submit' disabled={isSubmitting}>
                Submit
            </button>
        </form>
    )
}