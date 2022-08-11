import { useState, useEffect, useMemo } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const filterList = useMemo(
    () => contacts.filter(el => el.name.toLowerCase().includes(filter.toLocaleLowerCase())),
    [filter, contacts]
  );

  return (
    <div className={s.wrap}>
      <div className={s.phonebook}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <Filter title="Find contacts by name" />
      </div>

      <div className={s.contacts}>
        <h2 className={s.subTitle}>Contacts: {contacts.length}</h2>
        <ContactList contacts={filterList} />
      </div>
    </div>
  );
};
