import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from 'redux/contacts/items/ItemsActions';
import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const contactsAfterFilter = useMemo(
    () => contacts.filter(el => el.name.toLowerCase().includes(filter.toLocaleLowerCase())),
    [filter, contacts]
  );
  const dispatch = useDispatch();

  return (
    <ul className={s.list}>
      {contactsAfterFilter.map(el => (
        <li key={el.id} className={s.item}>
          <p className={s.text}>
            {el.name}: <span className={s.num}>{el.number}</span>
          </p>
          <button type="button" className={s.btn} onClick={() => dispatch(removeItem(el.id))}>
            x
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
