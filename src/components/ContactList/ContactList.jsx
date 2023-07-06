import { Contact } from 'components/Contact/Contact';
import React from 'react';
import { Ul } from './ContactList.styled';
import PropTypes from 'prop-types';

export const ContactList = ({ onRemoveContact, filteredContacts }) => {
  return (
    <Ul>
      <Contact
        onRemoveContact={onRemoveContact}
        filteredContacts={filteredContacts}
      />
    </Ul>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onRemoveContact: PropTypes.func.isRequired,
};
