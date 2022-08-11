import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem } from 'redux/contacts/item/actions';
import s from './ContactList.module.css';

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <ul className={s.list}>
      {contacts.map(el => (
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

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
