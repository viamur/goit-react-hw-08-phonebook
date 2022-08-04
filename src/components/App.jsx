import { useState, useEffect, useMemo } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';
import { useRef } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');
  const firstStartRef = useRef(false);

  useEffect(() => {
    if (firstStartRef.current) {
      const data = JSON.stringify(contacts);
      localStorage.setItem('contacts', data);
    }
    firstStartRef.current = true;
  }, [contacts]);

  const handleSubmitForm = obj => {
    setContacts(prev => [...prev, obj]);
  };

  const handleChangeInput = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContacts = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  const filterList = useMemo(
    () => contacts.filter(el => el.name.toLowerCase().includes(filter.toLocaleLowerCase())),
    [filter, contacts]
  );

  return (
    <div className={s.wrap}>
      <div className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm contacts={contacts} handleSubmitForm={handleSubmitForm} />
        <Filter
          title="Find contacts by name"
          value={filter}
          handleChangeInput={handleChangeInput}
        />
      </div>

      <div className={s.contacts}>
        <h2 className={s.subTitle}>Contacts: {contacts.length}</h2>
        <ContactList contacts={filterList} handleDeleteContacts={handleDeleteContacts} />
      </div>
    </div>
  );
};
