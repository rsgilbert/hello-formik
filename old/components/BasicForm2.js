import { ErrorMessage, Field, Form, Formik } from "formik"
import React from "react"

export const BasicForm2 = () => {
    return (
        <div>
            <h1>Again in my app</h1>
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
                    if (values.password.length < 4) {
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

const MyInnerForm = ({ isSubmitting }) => {
    return (
        <Form>
            <Field
                type="email"
                name="email"
            />
            <ErrorMessage
                name="email"
                component="div"
            />
            <Field
                type="password"
                name="password"
            />
            <ErrorMessage
                name="password"
                component="div"
            />
            <button
                type="submit"
                disabled={isSubmitting}
            >
                Submit
            </button>
        </Form>
    )
}