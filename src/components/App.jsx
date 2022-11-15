import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import './App.css';
import ContactForm from './Form/Form';
import ContactList from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { filterSliseReducer } from 'redux/filterSlice';
import { sub } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(state => state.filter);
  const contactsValue = useSelector(state => state.contacts);

  const submitHandler = (values, { resetForm }) => {
    values.id = shortid.generate();
    if (contactsValue.some(obj => obj.name === values.name)) {
      resetForm();
      return window.alert(`${values.name} is already in contacts`);
    }
    dispatch(sub(values));
    resetForm();
  };

  const filterHandler = e => {
    dispatch(filterSliseReducer(e.target.value));
  };
  const normalizedFilter = filterValue.toLowerCase();
  const visibleContacts = contactsValue.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={submitHandler} />

      <h2 className="subtitle">Contacts</h2>
      <Filter value={filterValue} onFilter={filterHandler} />
      <ContactList arr={visibleContacts} />
    </>
  );
};
