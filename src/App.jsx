
import './App.css'
import ContactForm from './components/ContactsForm/contactsForm'
import ContactsList from './components/ContactsList/contactsList'
import SearchBox from './components/searchBox/searchBox'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from './redux/contactsOps'
import { getIsLoading, getError } from './redux/contactsSlice'
import NavBar from './components/Navigation/navigation'
import { Route, Routes } from 'react-router-dom'

function App() {
  const dispatch = useDispatch();
   const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={} />
        <Route path='/contacts' element={}/>
      </Routes>

      <ContactForm />
      <SearchBox/>
    <ContactsList/>
    </>
  )
}

export default App
