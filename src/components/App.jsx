import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
          <h2 className={s.subTitle}>Contacts</h2>
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
