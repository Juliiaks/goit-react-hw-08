
import './App.css'
// import ContactForm from './components/ContactsForm/contactsForm'
// import ContactsList from './components/ContactsList/contactsList'
// import { useDispatch, useSelector } from 'react-redux'
// import { getIsLoading, getError } from './redux/contactsSlice'
import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import AppBar from './components/AppBar/AppBar'
// import RegistrationPage from './pages/RegistrationPage'
// import HomePage from './pages/HomePage'
// import LoginPage from './pages/LoginPage'
// import ContactsPage from './pages/ContactsPage'
import { Layout } from './Layout'
import { PrivateRoute } from './privateRoute'
import { RestrictedRoute } from './RestrictedRoute'
import { refreshUser } from './redux/auth/operations'
import { selectIsRefreshing } from './redux/auth/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'


const HomePage = lazy(() => import('./pages/HomePage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage'));

function App() {
  // const dispatch = useDispatch();
  //  const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts())
  // }, [dispatch])
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


  return (
    <>   
   {isRefreshing ? (
    <p>Refreshing user...</p>
  ) : (
     <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  )}




      {/* <AppBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={ <LoginPage/>} />
          <Route path='/register' element ={<RegistrationPage/>}/>
        <Route path='/contacts' element={<></>}/>
      </Routes> */}
{/* 
      <ContactForm />
      <SearchBox/>
    <ContactsList/> */}
    </>
  )
}

export default App
