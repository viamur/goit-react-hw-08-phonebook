import PropTypes from 'prop-types';
import s from './ContactList.module.css';

const ContactList = ({ filter, contacts, handleDeleteContacts }) => {
  return (
    <ul className={s.list}>
      {contacts
        .filter(el => el.name.toLowerCase().includes(filter.toLocaleLowerCase()))
        .map(el => (
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
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  handleDeleteContacts: PropTypes.func.isRequired,
};
