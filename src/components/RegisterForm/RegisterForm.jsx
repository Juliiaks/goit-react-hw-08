import { Field, Formik, Form } from "formik"
import { useId } from "react"


export default function RegisterForm({submit}) {
    
    const nameId = useId()
    const emailId = useId()
    const passwordId = useId()

    const handleSubmit = (values, actions) => {
        console.log('Submitted values:', values);
        submit(values)
        actions.resetForm()
    }
        

    return (
        <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor={nameId}>Name: 
                    <Field name='name' id={nameId} />
                </label>
                <br />
            <label htmlFor={emailId}>Email:
                    <Field name='email' id={emailId} />
                </label>
                <br/>              
                <label htmlFor={passwordId}>Password:
                    <Field name='password' type='password' id={passwordId} />
                </label>
                <br/>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    )
}