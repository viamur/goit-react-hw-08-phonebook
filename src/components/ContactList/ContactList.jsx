import PropTypes from 'prop-types';

const ContactList = ({ filter, contacts }) => {
  return (
    <ul>
      {contacts
        .filter(el => el.name.toLowerCase().includes(filter.toLocaleLowerCase()))
        .map(el => (
          <li key={el.id}>
            <p> {el.name}</p>
            <p>{el.number}</p>
          </li>
        ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {};
