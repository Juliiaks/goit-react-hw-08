import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Formik, Form, Field } from 'formik';
// import css from './LoginForm.module.css';

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
        <Form autoComplete="off">
          <label>
            Email
            <Field type="email" name="email" />
          </label>
          <br />
          <label>
            Password
            <Field type="password" name="password" />
          </label>
          <br />
          <button type="submit">Log In</button>
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