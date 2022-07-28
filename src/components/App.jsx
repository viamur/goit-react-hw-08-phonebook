import { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

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

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>Phonebok</h1>
        <ContactForm handleSubmitForm={this.handleSubmitForm} />

        <h2>Contacts</h2>
        <Filter title="Find contacts by name" handleChangeInput={this.handleChangeInput} />
        <ContactList filter={filter} contacts={contacts} />
      </div>
    );
  }
}
