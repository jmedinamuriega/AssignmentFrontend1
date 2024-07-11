import React, { createContext, useState, useContext } from 'react';

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
  ]);
  const [selectedContact, setSelectedContact] = useState(null);

  const selectContact = (id) => {
    const contact = contacts.find(contact => contact.id === id);
    setSelectedContact(contact);
  };

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, selectContact }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContactContext = () => useContext(ContactContext);
