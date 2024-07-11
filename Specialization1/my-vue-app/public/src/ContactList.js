import React from 'react';
import { useContactContext } from './ContactContext';

const ContactList = () => {
  const { contacts, selectContact } = useContactContext();

  return (
    <div>
      <h2>Contact List</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} onClick={() => selectContact(contact.id)}>
            {contact.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
