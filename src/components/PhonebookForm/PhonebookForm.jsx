import React, { Component } from 'react';
import {
  Button,
  Form,
  Input,
  Label,
  Span,
  TitleH2,
} from './PhonebookForm.styled';
import PropTypes from 'prop-types';


export class PhonebookForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const contactData = {
      name: this.state.name,
      number: this.state.number,
    };

    this.props.onAddContact(contactData);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <TitleH2>{this.props.title}</TitleH2>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            <Span>Name</Span>
            <Input
              onChange={this.handleInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              //   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              value={this.state.name}
              required
            />
          </Label>
          <Label>
            <Span>Number</Span>
            <Input
              onChange={this.handleInputChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              //   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}

PhonebookForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
