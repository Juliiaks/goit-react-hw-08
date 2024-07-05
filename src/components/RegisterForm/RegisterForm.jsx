import { Field, Formik, Form } from "formik"
import { useId } from "react"
import css from "./registerForm.module.css"


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
            <Form className={css.form}>
                <label htmlFor={nameId} className={css.label}>Name:
                    <br/>
                    <Field name='name' id={nameId} className={css.field}/>
                </label>
                    <br/>
                <label htmlFor={emailId} className={css.label}>Email:
                    <br/>
                    <Field name='email' id={emailId}  className={css.field}/>
                </label>
                    <br/>     
                <label htmlFor={passwordId} className={css.label}>Password:
                    <br/>
                    <Field name='password' type='password' id={passwordId} className={css.field}/>
                </label>
                    <br/>
                <button type="submit" className={css.btn}>Register</button>
            </Form>
        </Formik>
    )
}