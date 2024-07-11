import React from 'react';
import './styles.css';
import { ContactProvider } from './ContactContext';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';

const App = () => {
  return (
    <ContactProvider>
      <div className="App">
        <ContactList />
        <ContactDetails />
      </div>
    </ContactProvider>
  );
};

export default App;
