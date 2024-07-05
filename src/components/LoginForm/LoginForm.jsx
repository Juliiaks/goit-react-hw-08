import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field } from 'formik';
import css from "./loginForm.module.css"

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    // e.preventDefault();
    // const form = e.currentTarget;

    dispatch(logIn(values))
      .unwrap()
      .then(() => {
        console.log('login success');
      })
      .catch(() => {
        console.log('login error');
      });

    actions.resetForm()
  };

  return (

 <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className={css.form}>
          <label className={css.label}>
            Email:
            <br/>
            <Field type="email" name="email" className={css.field} />
          </label>
          <br />
          <label className={css.label}>
            Password:
            <br/>
            <Field type="password" name="password" className={css.field}/>
          </label>
          <br />
          <button type="submit" className={css.btn}>Log In</button>
        </Form>
      )}
    </Formik>


    // <form  onSubmit={handleSubmit} autoComplete="off">
    //   <label >
    //     Email
    //     <input type="email" name="email" />
    //       </label>
    //       <br/>
    //   <label >
    //     Password
    //     <input type="password" name="password" />
    //       </label>
    //       <br/>
    //   <button type="submit">Log In</button>
    // </form>
  );
};