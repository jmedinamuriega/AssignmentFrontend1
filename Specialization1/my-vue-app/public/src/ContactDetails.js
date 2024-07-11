import React from 'react';
import { useContactContext } from './ContactContext';

const ContactDetails = () => {
  const { selectedContact } = useContactContext();

  return (
    <div className="ContactDetails">
      <h2>Contact Details</h2>
      {selectedContact ? (
        <div>
          <p>Name: {selectedContact.name}</p>
          <p>Email: {selectedContact.email}</p>
          <p>Phone: {selectedContact.phone}</p>
        </div>
      ) : (
        <p>Select a contact to view details</p>
      )}
    </div>
  );
};

export default ContactDetails;
