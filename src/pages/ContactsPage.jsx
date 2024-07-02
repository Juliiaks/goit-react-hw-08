import { useDispatch } from "react-redux";
import {
    fetchContacts
} from "../redux/contacts/operations";
import ContactForm from "../components/ContactsForm/contactsForm";
import SearchBox from "../components/searchBox/searchBox";
import ContactsList from "../components/ContactsList/contactsList";
 

export default function ContactsPage(params) {
    const dispatch = useDispatch();
//    const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

    return (
        <>
              <ContactForm />
      <SearchBox/>
    <ContactsList/>
        </>
    )
}