import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmitForm = obj => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...obj }],
    }));
  };

  handleChangeInput = e => {
    const input = e.target;

    this.setState({ [input.name]: input.value });
  };

  handleDeleteContacts = id => {
    this.setState({ contacts: this.state.contacts.filter(el => el.id !== id) });
  };

  componentDidMount() {
    const data = localStorage.getItem('contacts');
    const parseData = JSON.parse(data);

    if (parseData) {
      return this.setState({ contacts: [...parseData] });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      const data = JSON.stringify(contacts);
      localStorage.setItem('contacts', data);
    }
  }

  render() {
    const { contacts, filter } = this.state;
    return (
      <div className={s.wrap}>
        <div className={s.phonebook}>
          <h1 className={s.title}>Phonebook</h1>
          <ContactForm contacts={contacts} handleSubmitForm={this.handleSubmitForm} />
          <Filter title="Find contacts by name" handleChangeInput={this.handleChangeInput} />
        </div>

        <div className={s.contacts}>
          <h2 className={s.subTitle}>Contacts: {contacts.length}</h2>
          <ContactList
            filter={filter}
            contacts={contacts}
            handleDeleteContacts={this.handleDeleteContacts}
          />
        </div>
      </div>
    );
  }
}
