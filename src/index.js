import React from 'react'
import { createRoot } from 'react-dom/client'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import './styles.css'


/**
 * A custom validation function
 * @param {{email, lastName, firstName}} values 
 * @returns  { { email?: string, lastName?: string, firstName?: string }} - an error messages object
 */
const rigit_validate = values => {
    const result = {}
    if (!values.email) result.email = 'Required'
    if (!values.firstName) result.firstName = 'Required'
    if (!values.lastName) result.lastName = 'Required'
    if (values.firstName.length > 10) result.firstName = 'Too long'
    if (values.lastName.length > 10) result.lastName = 'Too long'
    if (!values.email.includes('@')) result.email = 'Invalid email address'
    return result
}


const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            lastName: '',
            firstName: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(10, 'Must be atmost 10 characters')
                .required('Required'),
            lastName: Yup.string()
                .max(10, 'Must be atmost 10 characters')
                .required('Required'),
            email: Yup.string()
                .email("Invalid email address").required('Required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor='firstName'>First Name</label>
            <input
                id='firstName'
                name='firstName'
                type='text'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName}
            <label htmlFor='lastName'>Last Name</label>
            <input
                id='lastName'
                name='lastName'
                type='text'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName}
            <label htmlFor='email'>Email Address</label>
            <input
                id='email'
                name='email'
                type='email'
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email}
            <button type='submit'>Submit</button>
        </form>
    )
}

function App() {
    return (
        <SignupForm />
    )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)