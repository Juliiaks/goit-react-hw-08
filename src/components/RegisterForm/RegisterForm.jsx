import { Field, Formik, Form } from "formik"
import { useId } from "react"
import { useDispatch } from "react-redux"
import { registerOperation } from "../../redux/auth/operations"


export default function RegisterForm({submit}) {
    const dispatch = useDispatch()
    
    const nameId = useId()
    const emailId = useId()
    const passwordId = useId()

    const handleSubmit = (values, actions) => {
        console.log('Submitted values:', values);
        // dispatch(registerOperation(values))
        submit(values)
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
                    <Field name='password' type='password'/>
                </label>
                <br/>
                <button type="submit">Register</button>
            </Form>
        </Formik>
    )
}