import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);

  return (
    <div className={s.wrap}>
      <div className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <Filter title="Find contacts by name" />
      </div>

      <div className={s.contacts}>
        <h2 className={s.subTitle}>Contacts: {contacts.length}</h2>
        <ContactList />
      </div>
    </div>
  );
};
