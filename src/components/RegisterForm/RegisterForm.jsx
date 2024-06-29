import { Field, Formik, Form } from "formik"
import { useId } from "react"
import { useDispatch } from "react-redux"


export default function RegisterForm() {
    const dispatch = useDispatch()
    
    const nameId = useId()
    const emailId = useId()
    const passwordId = useId()

    const handleSubmit = (values, actions) => {
        console.log('Submitted values:', values);
        dispatch(register(values))
        actions.resetForm()
    }
        

    return (
        <Formik initialValues={{ name: ' ', email: ' ', password: ' ' }} onSubmit={handleSubmit}>
            <Form>
                <label htmlFor={nameId}>Name: 
                    <Field name='name' />
                </label>
                <br />
            <label htmlFor={emailId}>Email:
                    <Field name='email' />
                </label>
                <br/>              
            <label htmlFor={passwordId}>Password: 
                    <Field name='password' type='password' />
                </label>
                <br/>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    )
}