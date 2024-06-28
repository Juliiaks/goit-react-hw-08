import { Field, Formik, Form } from "formik"
import { useId } from "react"


export default function RegisterForm() {
    const nameId = useId()
    const emailId = useId()
    const passwordId = useId()

    const handleSubmit = (actions, values) => {
        submit(values)
        actions.resetForm()
    }
        

    return (
        <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
            <Form>
            <label htmlFor={nameId}>Name: </label>
            <Field name='name' />
            <label htmlFor={emailId}>Email: </label>
            <Field name='email' /> 
            <label htmlFor={passwordId}>Password: </label>
            <Field name='password' type='password' />
                <button type="submit">Register</button>
            </Form>
        </Formik>
    )
}