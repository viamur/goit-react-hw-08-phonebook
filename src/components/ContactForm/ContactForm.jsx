import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from 'redux/contacts/items/ItemsActions';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const input = e.target;

    input.name === 'name' && setName(input.value);
    input.name === 'number' && setNumber(input.value);
  };

  const handleFormCompilation = e => {
    e.preventDefault();
    const id = nanoid();
    const check = contacts.find(el => el.name.toLowerCase() === name.toLowerCase());
    if (!check) {
      dispatch(addItem({ id, name, number }));
      setName('');
      setNumber('');
    } else {
      Report.failure('Error', name + 'is already in contacts', 'Okay');
    }
  };

  return (
    <form onSubmit={handleFormCompilation} className={s.form}>
      <label className={s.label}>
        <input
          type="text"
          name="name"
          className={s.input}
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChangeInput}
        />
      </label>
      <label className={s.label}>
        <input
          type="tel"
          name="number"
          className={s.input}
          placeholder="Number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChangeInput}
        />
      </label>
      <button className={s.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
