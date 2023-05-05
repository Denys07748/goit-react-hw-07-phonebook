import { fetchContacts } from 'redux/operations';
import { Container, TitleMain, TitleSec } from './App.styled';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <TitleMain>Phonebook</TitleMain>
      <ContactForm />
      <TitleSec>Contacts</TitleSec>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.length === 0 ? (
        <p>
          There are no contacts in your phone book yet. Please add contacts.
        </p>
      ) : (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </Container>
  );
};

export default App;
