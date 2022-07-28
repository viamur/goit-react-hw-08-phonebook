import PropTypes from 'prop-types';

const ContactList = ({ filter, contacts, handleDeleteContacts }) => {
  return (
    <ul>
      {contacts
        .filter(el => el.name.toLowerCase().includes(filter.toLocaleLowerCase()))
        .map(el => (
          <li key={el.id}>
            <p>
              {' '}
              {el.name}: {el.number}
            </p>
            <button type="button" onClick={() => handleDeleteContacts(el.id)}>
              Delete
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
