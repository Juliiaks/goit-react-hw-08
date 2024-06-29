
import './App.css'
// import ContactForm from './components/ContactsForm/contactsForm'
// import ContactsList from './components/ContactsList/contactsList'
// import { useDispatch, useSelector } from 'react-redux'
// import { getIsLoading, getError } from './redux/contactsSlice'
import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import AppBar from './components/AppBar/AppBar'
import RegistrationPage from './pages/RegistrationPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'


// const HomePage = lazy(() => import('./pages/HomePage'))
// const RegistrationPage = lazy(() => import('./pages/RegistrationPage'))

function App() {
  // const dispatch = useDispatch();
  //  const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // useEffect(() => {
  //   dispatch(fetchContacts())
  // }, [dispatch])

  return (
    <>
      <AppBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={ <LoginPage/>} />
          <Route path='/register' element ={<RegistrationPage/>}/>
        <Route path='/contacts' element={<></>}/>
      </Routes>
{/* 
      <ContactForm />
      <SearchBox/>
    <ContactsList/> */}
    </>
  )
}

export default App
