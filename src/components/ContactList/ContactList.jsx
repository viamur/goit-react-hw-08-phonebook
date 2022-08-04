import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ contacts, handleDeleteContacts }) => {
  return (
    <ul className={s.list}>
      {contacts.map(el => (
        <li key={el.id} className={s.item}>
          <p className={s.text}>
            {el.name}: <span className={s.num}>{el.number}</span>
          </p>
          <button type="button" className={s.btn} onClick={() => handleDeleteContacts(el.id)}>
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
  handleDeleteContacts: PropTypes.func.isRequired,
};
