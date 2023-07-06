import { Component } from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { TitleH2 } from './App.styled';
import { Filter } from './Filter/Filter';
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

  onRemoveContact = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  onAddContact = contactData => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contactData.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contactData.name} is already in contacts`);
      return;
    }

    const finalContact = {
      id: nanoid(5),
      ...contactData,
    };

    this.setState({
      contacts: [...this.state.contacts, finalContact],
    });
  };

  onChangeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  onFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalFilter)
    );
  };

  //

  render() {
    const filteredContacts = this.onFilteredContacts();
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          paddingTop: 50,
        }}
      >
        <PhonebookForm
          title="Phonebook"
          onAddContact={this.onAddContact}
        ></PhonebookForm>
        <TitleH2>Contacts</TitleH2>

        {this.state.contacts.length > 0 ? (
          <Filter onChangeFilter={this.onChangeFilter} />
        ) : (
          alert('Your phonebook is empty. Add first contact!')
        )}
        {this.state.contacts.length > 0 && (
          <ContactList
            onRemoveContact={this.onRemoveContact}
            filteredContacts={filteredContacts}
          />
        )}
      </div>
    );
  }
}
