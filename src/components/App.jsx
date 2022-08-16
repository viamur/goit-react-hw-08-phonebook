import ContactForm from './ContactForm/ContactForm';
import { Block } from 'notiflix/build/notiflix-block-aio';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';
import { useSelector } from 'react-redux';
import { getStateItems, getStateLoading } from 'redux/contacts/contactsSelector';

export const App = () => {
  const contacts = useSelector(getStateItems);
  const isLoading = useSelector(getStateLoading);

  isLoading ? Block.circle('.js-element') : Block.remove('.js-element');

  return (
    <div className={s.wrap}>
      <div className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <Filter title="Find contacts by name" />
      </div>

      <div className={`${s.contacts} js-element`}>
        <h2 className={s.subTitle}>Contacts: {contacts.length}</h2>
        <ContactList />
      </div>
    </div>
  );
};
